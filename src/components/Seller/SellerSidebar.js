import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const SellerSidebar = () => {
  return (
    <nav className="seller-sidebar bg-gray-800 text-white p-4 min-h-screen lg:w-1/5 w-full lg:fixed">
      <h3 className="text-2xl font-semibold mb-6">Seller Dashboard</h3>
      <ul className="space-y-4">
        <li>
          <Link 
            to="/seller/allproducts" 
            className="block p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors duration-200"
          >
            All Products
          </Link>
        </li>
        <li>
          <Link 
            to="/seller/addproduct" 
            className="block p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors duration-200"
          >
            Add Product
          </Link>
        </li>
        <li>
          <Link 
            to="/seller/orders" 
            className="block p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors duration-200"
          >
            Orders
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default SellerSidebar;
