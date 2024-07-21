import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, PlayIcon, StarIcon, SearchIcon, PlusIcon } from '@heroicons/react/outline';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <HomeIcon className="h-5 w-5" />
            <Link to="/" className="text-lg font-bold">Home</Link>
          </li>
          <li className="flex items-center space-x-2">
            <PlayIcon className="h-5 w-5" />
            <Link to="/live" className="text-lg font-bold">Live</Link>
          </li>
          <li className="flex items-center space-x-2">
            <StarIcon className="h-5 w-5" />
            <Link to="/favorites" className="text-lg font-bold">Favorites</Link>
          </li>
          <li className="flex items-center space-x-2">
            <StarIcon className="h-5 w-5" />
            <Link to="/tournaments" className="text-lg font-bold">Tournament</Link>
          </li>
        </ul>
        <div className="mt-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-700 text-white py-2 pl-10 pr-4 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold">Sports</h2>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center justify-between">
              <Link to="/sports/football" className="text-lg">Football</Link>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <Link to="/sports/basketball" className="text-lg">Basketball</Link>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <Link to="/sports/ice-hockey" className="text-lg">Ice Hockey</Link>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <Link to="/sports/tennis" className="text-lg">Tennis</Link>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <Link to="/sports/table-tennis" className="text-lg">Table Tennis</Link>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <Link to="/sports/american-football" className="text-lg">American Football</Link>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </li>
            <li className="mt-4">
              <Link to="/sports/all" className="text-sm text-gray-400">See All (16)</Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
