import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import SellerSidebar from './SellerSidebar';

const Orders = () => {
  // Sample data for charts
  const pieData = {
    labels: ['Pending', 'Completed', 'Cancelled'],
    datasets: [
      {
        data: [30, 50, 20], // Sample data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Orders',
        data: [65, 59, 80, 81, 56, 55, 40], // Sample data
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <SellerSidebar />

      <div className="flex-grow p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Orders Overview</h2>

        {/* Pie Chart */}
        <div className="mb-10">
          <h3 className="text-lg font-medium mb-4">Order Status Distribution</h3>
          <div className="bg-white p-4 rounded shadow-md max-w-lg mx-auto">
            <Pie data={pieData} />
          </div>
        </div>

        {/* Bar Chart */}
        <div>
          <h3 className="text-lg font-medium mb-4">Orders Per Month</h3>
          <div className="bg-white p-4 rounded shadow-md max-w-lg mx-auto">
            <Bar data={barData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
