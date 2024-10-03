import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerSidebar from './SellerSidebar';
import AllProducts from './AllProducts';
import AddProduct from './AddProduct';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    axios.get('/api/seller/products') // Replace with the correct endpoint
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products', error);
      });
  }, []);

  // Function to add a new product
  const addNewProduct = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Seller Dashboard</h1>
        <AddProduct onAddProduct={addNewProduct} />
        <AllProducts products={products} />
      </div>
    </div>
  );
};

export default HomePage;
