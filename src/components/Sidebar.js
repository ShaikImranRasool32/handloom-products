import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-5">
      <h2 className="text-lg font-bold mb-4">Marketing Menu</h2>
      <ul>       
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <Link to="/createad">Create Ad</Link>
        </li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <Link to="/homepage">Homepage</Link> {/* Link to the Homepage */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
