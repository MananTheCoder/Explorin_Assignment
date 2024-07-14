import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Table from './components/Table';
import './index.css'; 

function App() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="bg-white shadow-md rounded-lg max-w-full mx-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'Overview' ? <Table /> : <div className="p-4 text-center">Hello World</div>}
      </div>
    </div>
  );
}

export default App;
