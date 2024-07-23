import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

export interface User {
    userId: number;
    username: string;
    balance: number;
}

interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    updateBalance: (newBalance: number) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const decodedUser: User = jwtDecode<User>(token);
            setUser(decodedUser);
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const response = await api.post('/auth/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const decodedUser: User = jwtDecode<User>(token);
            setUser(decodedUser);
            setIsAuthenticated(true);
        } catch (error) {
            toast.error('Invalid credentials. Please try again.');
        }
    };

    const register = async (username: string, email: string, password: string) => {
        try {
            const response = await api.post('/auth/register', { username, email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const decodedUser: User = jwtDecode<User>(token);
            setUser(decodedUser);
            setIsAuthenticated(true);
        } catch (error) {
            toast.error('Registration failed. Please try again.');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
        setUser(null);
        setIsAuthenticated(false);
    };

    const updateBalance = (newBalance: number) => {
        if (user) {
            setUser({ ...user, balance: newBalance });
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, register, logout, updateBalance }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
