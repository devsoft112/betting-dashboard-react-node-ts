import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import UserDropdown from '../auth/UserDropdown';
import { MenuIcon, LoginIcon, UserAddIcon } from '@heroicons/react/outline';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  if (isLoading) {
    return <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center">Loading...</div>;
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center z-50">
      <button className="md:hidden text-white" onClick={onMenuClick}>
        <MenuIcon className="h-6 w-6" />
      </button>
      <div className="flex items-center">
        <img src="/static/gamdom-logo.svg" alt="Logo" className="mr-2" />
      </div>
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <div className="relative flex items-center space-x-4">
            <span>{user?.username}</span>
            <img
              src="/static/avatar.png"
              alt="Avatar"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={handleAvatarClick}
            />
            {isDropdownOpen && <UserDropdown user={user} onLogout={logout} onClose={handleCloseDropdown} />}
          </div>
        ) : (
          <>
            <button 
              onClick={() => setIsLoginModalOpen(true)} 
              className="bg-gray-700 text-white font-bold px-4 py-2 rounded flex items-center"
            >
              <LoginIcon className="h-5 w-5 md:hidden" />
              <span className="hidden md:inline">Sign In</span>
            </button>
            <button 
              onClick={() => setIsRegisterModalOpen(true)} 
              className="bg-[#35FF97] text-gray-700 font-bold px-4 py-2 rounded flex items-center"
            >
              <UserAddIcon className="h-5 w-5 md:hidden" />
              <span className="hidden md:inline">Create Account</span>
            </button>
          </>
        )}
      </div>
      <hr className="header-effect-line" />
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={() => setIsLoginModalOpen(false)} />
      <RegisterModal isOpen={isRegisterModalOpen} onRequestClose={() => setIsRegisterModalOpen(false)} />
    </header>
  );
};

export default Header;
