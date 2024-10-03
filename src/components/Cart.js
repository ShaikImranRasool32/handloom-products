import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Navigate to payment page
  const handleProceedToPayment = () => {
    navigate('/payment', { state: { totalPrice } });
  };

  if (cart.length === 0) {
    return <div className="container mx-auto p-4">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Product</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Quantity</th>
            <th className="py-2 px-4 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border">{item.name}</td>
              <td className="py-2 px-4 border">₹{item.price}</td>
              <td className="py-2 px-4 border">{item.quantity}</td>
              <td className="py-2 px-4 border">₹{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="py-2 px-4 border font-bold">
              Total Cost:
            </td>
            <td className="py-2 px-4 border font-bold">₹{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
      <div className="text-center mt-8">
        <button
          className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition-colors"
          onClick={handleProceedToPayment}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
