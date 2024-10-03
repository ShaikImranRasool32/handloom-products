import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Sidebar from '../Sidebar';

// Register the required components
Chart.register(...registerables);

const MarketingHomePage = () => {
  // Sample data for charts
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 40, 70, 90, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Reach',
        data: [20, 50, 40, 70, 90],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        {/* Hero Section */}
        <div className="bg-cover bg-center h-96 flex items-center justify-center text-white" 
             style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?handloom)' }}>
          <div className="text-center bg-black bg-opacity-50 p-6 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">Promote Handloom Products to Global Buyers</h1>
            <p className="mb-6">Connecting artisans with buyers around the world.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Sales and Reach Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Sales Data</h3>
              <Bar data={data} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Reach Data</h3>
              <Bar data={data} />
            </div>
          </div>
        </div>

        {/* Campaigns Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Current Marketing Campaigns</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>Campaign Name: Spring Sale</p>
            <p>Start Date: March 1, 2024</p>
            <p>End Date: March 31, 2024</p>
            <p>Impressions: 10,000</p>
            <p>Clicks: 500</p>
            <p>Conversion Rate: 5%</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Customer Feedback</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>"The handloom products are exquisite! I love the craftsmanship!"</p>
            <p>- Satisfied Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingHomePage;
