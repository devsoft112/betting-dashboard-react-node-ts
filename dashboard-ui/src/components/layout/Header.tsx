import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/static/gamdom-logo.svg" alt="Logo" className="mr-2" />
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/login" className="bg-gray-700 text-white px-4 py-2 rounded">Sign In</Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Create Account</Link>
      </div>
      <hr className="header-effect-line" />
    </header>
  );
};

export default Header;
