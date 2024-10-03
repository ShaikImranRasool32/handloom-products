import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import AdminSidebar from './AdminSidebar';

const AdminHome = () => {
  // Sample data for charts
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [1200, 1900, 3000, 5000, 4000, 4500],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const inventoryData = {
    labels: ['Cotton', 'Silk', 'Wool', 'Jute'],
    datasets: [
      {
        label: 'Inventory Levels',
        data: [300, 150, 200, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  const orderData = {
    labels: ['New Orders', 'Completed Orders', 'Pending Orders'],
    datasets: [
      {
        label: 'Order Status',
        data: [30, 50, 20],
        backgroundColor: [
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-6 bg-gray-100 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
            <Bar data={salesData} options={{ responsive: true }} />
          </div>

          {/* Inventory Chart */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Inventory Levels</h2>
            <Pie data={inventoryData} options={{ responsive: true }} />
          </div>

          {/* Order Status Chart */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Order Status</h2>
            <Line data={orderData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
