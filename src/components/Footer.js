// // Footer.js
// import React from 'react';
// import SocialMediaIcons from './SocialMediaIcons';

// const Footer = () => {
//   return (
    
//     <footer className="footer">
//       <div className="footer-content">
//         <p>&copy; {new Date().getFullYear()} My Website</p>
//         <SocialMediaIcons />
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    // Footer
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Handloom Products</h3>
          <p className="text-gray-300">
            We bring you the best quality handloom products, crafted by
            talented artisans. Support sustainable and ethical fashion!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/seller" className="hover:underline">Seller</a></li>
            <li><a href="/marketing" className="hover:underline">Marketing</a></li>
            <li><a href="/admin" className="hover:underline">Admin</a></li>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-300">Email: info@handloomproducts.com</p>
          <p className="text-gray-300">Phone: (123) 456-7890</p>
        </div>
      </div>


      {/* Bottom Section */}
      <div className="text-center mt-8">
        <SocialMediaIcons />
        <p>&copy; {new Date().getFullYear()} Handloom Products. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
