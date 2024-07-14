import React, { useState } from 'react';
import { FaPlus, FaMinus, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import data from '../data/data.json'

const Table = () => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [expandedActivities, setExpandedActivities] = useState({});

  const handleExpandRow = (id) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter(rowId => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };

  const handleExpandActivity = (rowId, activityId) => {
    setExpandedActivities(prevState => ({
      ...prevState,
      [rowId]: prevState[rowId] && prevState[rowId].includes(activityId)
        ? prevState[rowId].filter(id => id !== activityId)
        : [...(prevState[rowId] || []), activityId]
    }));
  };

  return (
    <div className="p-4">
      <table className="min-w-full border-separate" style={{ borderSpacing: '0 10px' }}>
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 text-left w-1/12 pl-4">
              <input type="checkbox" className="shadow-custom-lg" />
            </th>
            <th className="py-2 text-left w-4/12">Packages</th>
            <th className="py-2 text-center w-3/12">Rate (in sqft)</th>
            <th className="py-2 text-center w-3/12">Total</th>
            <th className="py-2 text-center w-1/12"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tr className="border-b-0 relative">
                <td className="py-2 text-left pl-4">
                  <input type="checkbox" className="mr-2 shadow-custom-lg" />
                </td>
                <td className="py-2 text-left">{item.name}</td>
                <td className="py-2 text-center">₹ {item.rate.toFixed(2)}</td>
                <td className="py-2 text-center">₹ {item.total.toLocaleString('en-IN')}</td>
                <td className="py-2 text-center">
                  <button className="text-teal-500" onClick={() => handleExpandRow(item.id)}>
                    {expandedRows.includes(item.id) ? <FaMinus /> : <FaPlus />}
                  </button>
                </td>
              </tr>
              {expandedRows.includes(item.id) && item.activities.map((activity, index) => (
                <React.Fragment key={index}>
                  <tr className="border-b-0 relative">
                    <td className="py-2 text-left pl-8 relative">
                      <input type="checkbox" className="mr-2 shadow-custom-lg" />
                    </td>
                    <td className="py-2 text-left pl-4">{activity}</td>
                    <td className="py-2 text-center">₹ {item.rate.toFixed(2)}</td>
                    <td className="py-2 text-center">₹ {item.total.toLocaleString('en-IN')}</td>
                    <td className="py-2 text-center">
                      <button className="text-black" onClick={() => handleExpandActivity(item.id, index)}>
                        {expandedActivities[item.id] && expandedActivities[item.id].includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </td>
                  </tr>
                  {expandedActivities[item.id] && expandedActivities[item.id].includes(index) && (
                    ['Work Item 1', 'Work Item 2', 'Work Item 3'].map((workItem, idx) => (
                      <tr key={idx} className="border-b-0 relative">
                        <td className="py-2 text-left pl-16 relative">
                          <input type="checkbox" className="mr-2 shadow-custom-lg" />
                        </td>
                        <td className="py-2 text-left pl-8">{workItem}</td>
                        <td className="py-2 text-center"></td>
                        <td className="py-2 text-center">₹ {item.total.toLocaleString('en-IN')}</td>
                        <td className="py-2 text-center"></td>
                      </tr>
                    ))
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
