import React, { useEffect, useRef } from 'react';
import { User } from '../../context/AuthContext';

interface UserDropdownProps {
  user: User | null;
  onLogout: () => void;
  onClose: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user, onLogout, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={dropdownRef} className="absolute top-7 right-0 mt-2 w-48 bg-[#233753] text-white rounded-md shadow-lg py-2 z-[100]">
      <div className="px-4 py-2">
        <span className="block text-sm font-medium">{user?.username}</span>
      </div>
      <div className="border-t border-gray-200"></div>
      <button
        onClick={onLogout}
        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-500"
      >
        Logout
      </button>
    </div>
  );
};

export default UserDropdown;
