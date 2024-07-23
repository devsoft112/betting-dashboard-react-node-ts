import React from 'react';
import { HomeIcon, PlayIcon, StarIcon, PlusIcon, XIcon } from '@heroicons/react/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`bg-gray-800 text-white w-64 p-4 pt-24 fixed top-0 left-0 h-full transition-transform transform shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-20`}>
      <div className="w-full text-right">
        <button className="md:hidden text-white mb-4" onClick={onClose}>
          <XIcon className="h-6 w-6" />
        </button>
      </div>

      <nav>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <HomeIcon className="h-5 w-5" />
            <span className="text-md font-bold">Home</span>
          </li>
          <li className="flex items-center space-x-2">
            <PlayIcon className="h-5 w-5" />
            <span className="text-md font-bold">Live</span>
          </li>
          <li className="flex items-center space-x-2">
            <StarIcon className="h-5 w-5" />
            <span className="text-md font-bold">Favorites</span>
          </li>
          <li className="flex items-center space-x-2">
            <StarIcon className="h-5 w-5" />
            <span className="text-md font-bold">Tournament</span>
          </li>
        </ul>
        <hr className="mt-6" />
        <div className="mt-6">
          <h2 className="text-xl font-bold">Sports</h2>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center justify-between">
              <span className="text-md">Football</span>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span className="text-md">Basketball</span>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span className="text-md">Ice Hockey</span>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span className="text-md">Tennis</span>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span className="text-md">Table Tennis</span>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span className="text-md">American Football</span>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="mt-4">
              <span className="text-sm text-gray-400">See All (16)</span>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
