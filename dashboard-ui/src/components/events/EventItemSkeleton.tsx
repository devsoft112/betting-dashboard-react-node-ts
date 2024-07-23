import React from 'react';

const EventItemSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center mb-4 animate-pulse">
      <div className="w-full sm:w-auto mb-4 sm:mb-0">
        <div className="h-4 w-36 bg-gray-600 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-600 rounded w-1/2 mb-4"></div>
        <div className="flex items-center mt-1">
          <div className="h-6 w-6 bg-gray-600 rounded-full mr-2"></div>
          <div className="h-4 bg-gray-600 rounded w-1/3"></div>
        </div>
        <div className="flex items-center mt-1">
          <div className="h-6 w-6 bg-gray-600 rounded-full mr-2"></div>
          <div className="h-4 bg-gray-600 rounded w-1/3"></div>
        </div>
      </div>
      <div className="flex w-full sm:w-auto space-x-2 sm:space-x-4">
        <div className="text-center cursor-pointer p-2 flex-1 sm:flex-none sm:w-24 sm:h-16 rounded-lg bg-gray-600"></div>
        <div className="text-center cursor-pointer p-2 flex-1 sm:flex-none sm:w-24 sm:h-16 rounded-lg bg-gray-600"></div>
        <div className="text-center cursor-pointer p-2 flex-1 sm:flex-none sm:w-24 sm:h-16 rounded-lg bg-gray-600"></div>
      </div>
    </div>
  );
};

export default EventItemSkeleton;
