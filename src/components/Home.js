// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section with Carousel */}
//       <section className="relative">
//         <Carousel
//           autoPlay
//           infiniteLoop
//           showThumbs={false}
//           showStatus={false}
//           className="h-screen"
//         >
//           {/* Slide 1 */}
//           <div className="relative h-screen">
//             <img
//               src="https://source.unsplash.com/1600x900/?handloom,fabric"
//               alt="Handloom Fabric"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="text-center">
//                 <h1 className="text-5xl font-bold text-white">
//                   Discover Authentic Handloom Products
//                 </h1>
//                 <p className="mt-4 text-xl text-gray-200">
//                   Bringing you the finest craftsmanship from local artisans
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Slide 2 */}
//           <div className="relative h-screen">
//             <img
//               src="https://source.unsplash.com/1600x900/?weaving,handmade"
//               alt="Weaving Handmade"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="text-center">
//                 <h1 className="text-5xl font-bold text-white">
//                   Support Local Artisans
//                 </h1>
//                 <p className="mt-4 text-xl text-gray-200">
//                   Unique handcrafted products made with love and care.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Slide 3 */}
//           <div className="relative h-screen">
//             <img
//               src="https://source.unsplash.com/1600x900/?handloom,craft"
//               alt="Handloom Craft"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="text-center">
//                 <h1 className="text-5xl font-bold text-white">
//                   Crafted with Tradition
//                 </h1>
//                 <p className="mt-4 text-xl text-gray-200">
//                   Experience the rich heritage of handloom craftsmanship.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Carousel>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 bg-gray-100">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <img
//                 src="https://source.unsplash.com/500x500/?scarf,handloom"
//                 alt="Handloom Scarf"
//                 className="w-full h-48 object-cover rounded"
//               />
//               <h3 className="text-lg font-bold mt-4">Handloom Scarf</h3>
//               <p className="text-gray-600 mt-2">
//                 Intricately woven scarves with unique patterns.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <img
//                 src="https://source.unsplash.com/500x500/?fabric,handloom"
//                 alt="Handloom Fabric"
//                 className="w-full h-48 object-cover rounded"
//               />
//               <h3 className="text-lg font-bold mt-4">Handloom Fabric</h3>
//               <p className="text-gray-600 mt-2">
//                 Premium handwoven fabrics made by artisans.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <img
//                 src="https://source.unsplash.com/500x500/?handmade,craft"
//                 alt="Handloom Crafts"
//                 className="w-full h-48 object-cover rounded"
//               />
//               <h3 className="text-lg font-bold mt-4">Handloom Crafts</h3>
//               <p className="text-gray-600 mt-2">
//                 Unique handmade crafts inspired by cultural heritage.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-8">About Us</h2>
//           <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//             Handloom Products is a platform dedicated to promoting the finest
//             handloom products made by skilled artisans from around the world. Our
//             mission is to preserve the traditional art of weaving while
//             supporting sustainable and ethical fashion.
//           </p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* About Us */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">About Handloom Products</h3>
//             <p className="text-gray-300">
//               We bring you the best quality handloom products, crafted by
//               talented artisans. Support sustainable and ethical fashion!
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="/" className="hover:underline">Home</a></li>
//               <li><a href="/about-us" className="hover:underline">About Us</a></li>
//               <li><a href="/products" className="hover:underline">Products</a></li>
//               <li><a href="/contact" className="hover:underline">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Social Media Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white text-2xl hover:text-gray-400"
//               >
//                 Facebook
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white text-2xl hover:text-gray-400"
//               >
//                 Twitter
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white text-2xl hover:text-gray-400"
//               >
//                 Instagram
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-8 text-gray-400">
//           &copy; {new Date().getFullYear()} Handloom Products. All rights
//           reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div>
      <Navbar/>
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="h-screen"
        >
          {/* Slide 1 */}
          <div className="relative h-screen">
            <img
              src="./images/hero1.png"
              alt="Handloom Fabric"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white">
                  Discover Authentic Handloom Products
                </h1>
                <p className="mt-4 text-xl text-gray-200">
                  Bringing you the finest craftsmanship from local artisans
                </p>
                {/* Shop Now Button */}
                <button 
                  onClick={() => navigate('/products')}
                  className="mt-8 bg-tomato-red text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative h-screen">
            <img
              src="./images/hero2.png"
              alt="Weaving Handmade"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white">
                  Support Local Artisans
                </h1>
                <p className="mt-4 text-xl text-gray-200">
                  Unique handcrafted products made with love and care.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative h-screen">
            <img
              src="./images/hero3.png"
              alt="Handloom Craft"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white">
                  Crafted with Tradition
                </h1>
                <p className="mt-4 text-xl text-gray-200">
                  Experience the rich heritage of handloom craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Existing Featured Products */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="./images/scarf.png"
                alt="Handloom Scarf"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-4">Handloom Scarf</h3>
              <p className="text-gray-600 mt-2">
                Intricately woven scarves with unique patterns.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="./images/fabrics.png"
                alt="Handloom Fabric"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-4">Handloom Fabric</h3>
              <p className="text-gray-600 mt-2">
                Premium handwoven fabrics made by artisans.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="./images/crafts.png"
                alt="Handloom Crafts"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-4">Handloom Crafts</h3>
              <p className="text-gray-600 mt-2">
                Unique handmade crafts inspired by cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Our products are meticulously handcrafted by skilled artisans, ensuring quality and authenticity.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Sustainable Practices</h3>
              <p className="text-gray-600">
                We prioritize sustainable sourcing and eco-friendly practices to protect the environment.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Support Local Communities</h3>
              <p className="text-gray-600">
                By choosing our products, you directly support local artisans and their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

   <Footer/>
      
    </div>
  );
};

export default Home;
