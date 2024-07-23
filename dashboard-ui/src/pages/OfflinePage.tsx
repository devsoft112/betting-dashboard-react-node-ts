import React from 'react';

const OfflinePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">You are offline</h1>
        <p className="text-lg">Please check your internet connection.</p>
      </div>
    </div>
  );
};

export default OfflinePage;
