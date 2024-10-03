import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill={index < rating ? "#FFD700" : "#d3d3d3"} // Gold for filled stars, light grey for empty
          className="mr-1"
        >
          <path d="M12 .587l3.668 7.425 8.191 1.184-5.919 5.42 1.4 8.204L12 18.896l-7.34 3.86 1.4-8.204-5.919-5.42 8.191-1.184z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      text: "The handloom products I purchased are stunning and of high quality! Highly recommend.",
      rating: 5,
    },
    {
      name: "Bob Smith",
      text: "Fantastic craftsmanship! I love supporting a business that values tradition.",
      rating: 4,
    },
    {
      name: "Catherine Lee",
      text: "Absolutely love the products! They bring a touch of culture to my home.",
      rating: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <p className="text-gray-700 italic">"{review.text}"</p>
          <h4 className="font-bold mt-2 text-lg text-brown-600">{review.name}</h4>
          <StarRating rating={review.rating} />
        </div>
      ))}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What materials do you use?",
      answer: "We use 100% organic cotton and natural dyes for our handloom products.",
    },
    {
      question: "Do you offer custom orders?",
      answer: "Yes, we accept custom orders for specific designs and sizes.",
    },
    {
      question: "How can I care for my handloom products?",
      answer: "We recommend hand washing in cold water and air drying to maintain quality.",
    },
  ];

  return (
    <div className="space-y-4 mt-6">
      {faqs.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <h4 className="font-bold text-lg text-brown-600">{item.question}</h4>
          <p className="text-gray-700">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

const History = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h3 className="text-3xl font-semibold mb-4 text-brown-600">Our History</h3>
      <p className="text-gray-700">
        Founded in 2024, our company has been at the forefront of promoting traditional handloom crafts. 
        With a passion for sustainable practices and local craftsmanship, we strive to keep age-old techniques alive while catering to modern aesthetics. 
        Our artisans are skilled in various techniques, ensuring that each product tells a unique story and supports our community.
      </p>
    </div>
  );
};

const CoreValues = () => {
  const values = [
    "Quality: We prioritize the highest quality materials and craftsmanship.",
    "Sustainability: Committed to environmentally friendly practices.",
    "Fair Trade: Supporting artisans and local communities through ethical sourcing.",
    "Innovation: Blending traditional techniques with modern designs to create unique products.",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h3 className="text-3xl font-semibold mb-4 text-brown-600">Our Core Values</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleShopNowClick = () => {
    navigate('/products'); // Navigate to the products page
  };

  return (
    <>
    <Navbar/>
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-brown-800">About Us</h2>

        {/* History Section */}
        <History />

        {/* Core Values Section */}
        <CoreValues />

        {/* Testimonials Section */}
        <h3 className="text-3xl font-semibold mb-4 text-center text-brown-600 mt-8">What Our Customers Say</h3>
        <Testimonials />

        {/* FAQ Section */}
        <h3 className="text-3xl font-semibold mt-8 mb-4 text-center text-brown-600">Frequently Asked Questions</h3>
        <FAQ />

        {/* Call to Action Section */}
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold text-brown-600">Explore Our Unique Collection</h3>
          <p className="text-gray-700 mb-4">Visit our shop to discover the beauty of our handloom products.</p>
          <button
            className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 transition-colors"
            onClick={handleShopNowClick} // Add click handler
          >
            Shop Now
          </button>
        </div>
      </div>

    </section>
    <Footer/>
    </>
  );
};

export default AboutUs;
