import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/handloom-products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const goToCart = () => {
    navigate('/cart', { state: { cart } });
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
    <Navbar/>
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300 relative"
          >
            {/* Full image, which expands on hover */}
            <div className="relative w-full h-48 overflow-hidden"> {/* Adjusted height here */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 transform"
              />
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {truncateText(product.description, 60)}
              </p>
              <div className="text-xl font-bold mb-4">₹{product.price}</div>
            </div>
            <div className="p-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors w-full"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          className="bg-green-500 text-white py-3 px-8 rounded hover:bg-green-600 transition-colors"
          onClick={goToCart}
        >
          Go to Cart
        </button>
      </div>
      <Footer/>

    </div>
    </div>
  );
};

export default Products;
