import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg pointer-events-auto">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
