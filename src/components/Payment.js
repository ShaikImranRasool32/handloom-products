import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Payment</h1>
      <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
        <p className="text-lg mb-4">Total Amount: ₹{totalPrice}</p>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
          Proceed to Pay ₹{totalPrice}
        </button>
      </div>
    </div>
  );
};

export default Payment;
