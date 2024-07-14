import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white shadow">
      <h1 className="text-xl font-medium">Create Workorder</h1>
      <button className="bg-teal-500 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
};

export default Header;
