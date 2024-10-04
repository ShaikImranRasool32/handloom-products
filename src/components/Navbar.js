// import React, { useState } from "react";
// import { PaperAirplaneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
// import Home from "./Home"; // Adjust path as necessary
// import Products from "./Products"; // Adjust path as necessary
// import AboutUs from "./AboutUs"; // Adjust path as necessary
// import ContactUs from "./ContactUs";
// import Login from "./Login";

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [activeComponent, setActiveComponent] = useState("Home");

//   // Define your navigation items here with corresponding routes
//   const navItems = [
//     { name: "Home", route: "/home" },
//     { name: "Products", route: "/products" },
//     { name: "About Us", route: "/about-us" },
//     { name: "Contact", route: "/contact" },
//     { name:"Login",route:"/login"},
//     { name:"Register", route:"/register"}
  
//   ];

//   // Handle component change based on the active item
//   const handleNavClick = (name) => {
//     setActiveComponent(name);
//     setToggleMenu(false); // Close mobile menu on click
//   };

  
//   return (
//     <div>
//       <nav className="bg-white shadow-lg border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative flex items-center justify-between h-16">
//             {/* Mobile menu button */}
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               <button
//                 onClick={() => setToggleMenu(!toggleMenu)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
//                 aria-label="Toggle menu"
//               >
//                 {toggleMenu ? (
//                   <XMarkIcon className="h-6 w-6" />
//                 ) : (
//                   <Bars3Icon className="h-6 w-6" />
//                 )}
//               </button>
//             </div>

//             {/* Logo and primary menu */}
//             <div className="flex-1 flex items-center justify-between">
//               <div className="flex-shrink-0">
//                 <Link to="/home" className="flex items-center space-x-2 text-gray-800 font-bold">
//                   <PaperAirplaneIcon className="h-8 w-8 text-green-600" />
//                   <span className="text-2xl">Handloom Products</span>
//                 </Link>
//               </div>

//               <div className="hidden sm:flex sm:space-x-8">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.route}
//                     onClick={() => handleNavClick(item.name)}
//                     className="text-gray-800 hover:text-green-600"
//                     aria-label={item.name}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>

//               <div className="hidden sm:flex sm:items-center">
//                 <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div
//           className={`fixed inset-0 z-40 bg-white overflow-y-auto transform transition-transform duration-300 ease-in-out sm:hidden ${
//             toggleMenu ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="px-4 py-6 space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.route}
//                 onClick={() => handleNavClick(item.name)}
//                 className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
//                 aria-label={item.name}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <div className="px-4 py-2">
//               <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
//                 Shop Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Render the active component */}
//       <main className="p-4">
//         {navItems.find((item) => item.name === activeComponent)?.component}
//       </main>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { PaperAirplaneIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown visibility
  const navigate = useNavigate();

  // Load login state from localStorage (if persisted login is required)
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Define your navigation items here with corresponding routes
  const navItems = [
    { name: "Home", route: "/" },
    { name: "Products", route: "/products" },
    { name: "About Us", route: "/about-us" },
    { name: "Contact", route: "/contact" },
  ];

  // Handle component change based on the active item
  const handleNavClick = (name) => {
    setActiveComponent(name);
    setToggleMenu(false); // Close mobile menu on click
  };

  // Handle login/logout functionality
  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state on logout
    localStorage.removeItem("isLoggedIn"); // Remove from localStorage
    navigate("/"); // Redirect to home
  };

  // Mock login function (replace with actual authentication logic)
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // Persist login state
    setShowDropdown(false); // Hide the dropdown after login
    navigate("/home"); // Redirect to home after login
  };

  return (
    <div>
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                {toggleMenu ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Logo and primary menu */}
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0">
                <Link to="/home" className="flex items-center space-x-2 text-gray-800 font-bold">
                  <PaperAirplaneIcon className="h-8 w-8 text-green-600" />
                  <span className="text-2xl">Handloom Products</span>
                </Link>
              </div>

              <div className="hidden sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.route}
                    onClick={() => handleNavClick(item.name)}
                    className="text-gray-800 hover:text-green-600"
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Dropdown Menu */}
              <div className="hidden sm:flex sm:items-center relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <span>{isLoggedIn ? "Account" : "Menu"}</span>
                  <ChevronDownIcon className="h-5 w-5" />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {!isLoggedIn ? (
                      <>
                        <Link
                          to="/login"
                          onClick={handleLogin} // Mock login - replace with actual logic
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          onClick={() => handleNavClick("Register")}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Register
                        </Link>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-40 bg-white overflow-y-auto transform transition-transform duration-300 ease-in-out sm:hidden ${
            toggleMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.route}
                onClick={() => handleNavClick(item.name)}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
                aria-label={item.name}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2">
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                {isLoggedIn ? "Account" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Render the active component */}
      <main className="p-4">
        {navItems.find((item) => item.name === activeComponent)?.component}
      </main>
    </div>
  );
};

export default Navbar;
