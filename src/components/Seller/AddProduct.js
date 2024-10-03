import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerSidebar from './SellerSidebar'; // Make sure this is the correct path

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([]);

  // Fetch products when component mounts
  useEffect(() => {
    axios.get('/api/products') // Replace with your API endpoint
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products', error);
      });
  }, []);

  // Handle form submission and add new product
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { name, price, image, description };

    axios.post('/api/seller/addproduct', newProduct) // Replace with your API endpoint
      .then(response => {
        setProducts([...products, response.data]); // Add the new product to the list
        // Clear form
        setName('');
        setPrice('');
        setImage('');
        setDescription('');
        alert('Product added successfully!');
      })
      .catch(error => {
        console.error('Error adding product', error);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <SellerSidebar />

      <div className="flex-grow p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
        
        {/* Product Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md max-w-lg mx-auto">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price:</label>
            <input 
              type="number" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input 
              type="text" 
              value={image} 
              onChange={(e) => setImage(e.target.value)} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
