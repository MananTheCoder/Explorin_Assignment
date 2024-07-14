import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b-2 border-gray-200">
      <div 
        className={`p-4 cursor-pointer ${activeTab === 'Overview' ? 'border-b-2 border-black font-medium' : 'text-gray-400'}`} 
        onClick={() => setActiveTab('Overview')}
      >

        Overview
      </div>
      <div 
        className={`p-4 cursor-pointer ${activeTab === 'Other' ? 'border-b-2 border-black font-medium' : 'text-gray-400'}`} 
        onClick={() => setActiveTab('Other')}
      >
        Other
      </div>
    </div>
  );
};

export default Tabs;
