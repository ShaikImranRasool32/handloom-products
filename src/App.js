import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Payment from "./components/Payment";
import Cart from "./components/Cart";
import Sidebar from "./components/Sidebar";
import Createad from "./components/Marketing/Createad";
import HomePage from "./components/Marketing/HomePage";
import AddProduct from "./components/Seller/AddProduct";
import AllProducts from "./components/Seller/AllProducts";
import SellerSidebar from "./components/Seller/SellerSidebar";
import Orders from "./components/Seller/Orders";
import AdminSidebar from "./components/Admin/AdminSidebar";
import AdminHome from "./components/Admin/AdminHome";
import AddSeller from "./components/Admin/AddSeller";
import AddUser from "./components/Admin/AddUser";
import AddProducts from "./components/Admin/AddProducts";
import Addmarketingexpert from "./components/Admin/Addmarketingexpert";

const App = () => {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/cart" element={<Cart/>}/>


        <Route path="/marketing" element={<Sidebar/>}/>
        <Route path="/createad" element={<Createad/>}/>
        <Route path="/homepage" element={<HomePage/>}/>


        <Route path="/seller" element={<SellerSidebar/>}/>
        <Route path="/seller/addproduct" element={<AddProduct/>}/>
        <Route path="/seller/allproducts" element={<AllProducts/>}/>
        <Route path="/seller/orders" element={<Orders/>}/>

        <Route path="/admin" element={<AdminSidebar/>}/>
        <Route path="/admin/dashboard" element={<AdminHome/>}/>
        
        <Route path="/admin/addproducts" element={<AddProducts/>}/>
        <Route path="/admin/addseller" element={<AddSeller/>}/>
        <Route path="/admin/addusers" element={<AddUser/>}/>

        <Route path="admin/addmarketingexpert" element={<Addmarketingexpert />} />

      </Routes>
    </Router>
  );
};

export default App;
