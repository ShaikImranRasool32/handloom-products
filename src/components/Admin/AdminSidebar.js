import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <NavLink 
            to="/admin/dashboard" 
            className={({ isActive }) => 
              `block py-2 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/addproducts" 
            className={({ isActive }) => 
              `block py-2 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Add Products
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/addseller" 
            className={({ isActive }) => 
              `block py-2 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Add Seller
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/addusers" 
            className={({ isActive }) => 
              `block py-2 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Add Users
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default AdminSidebar;
