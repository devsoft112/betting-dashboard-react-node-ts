import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { JWT_SECRET } from '../config/secrets';

export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password });
        const token = jwt.sign({ userId: user.id, username, balance: 5950 }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user' });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (user && await user.validPassword(password)) {
            const token = jwt.sign({ userId: user.id, username, balance: 5950 }, JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Error logging in user' });
    }
};
