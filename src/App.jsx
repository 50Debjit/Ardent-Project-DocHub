import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import viteLogo from "/vite.svg";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import SignUp from "./pages/signup";
import ForgotPassword from "./pages/ForgotPassword";
import ContactUs from "./pages/ContactUs";
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Booking from "./pages/Booking/Booking";
import Dermatology from "./pages/Department/Specialization/Dermatology";
import GenSur from "./pages/Department/Specialization/GenSur";
import Department from "./pages/Department/Department";
import Cardiology from "./pages/Department/Specialization/Cardiology";
import GeneralPhy from "./pages/Department/Specialization/GeneralPhy";
import Neurology from "./pages/Department/Specialization/Neurology";
import Medicine from "./pages/Department/Specialization/Medicine";
import ENT from "./pages/Department/Specialization/ENT";
import Gynecology from "./pages/Department/Specialization/Gynecology";
import Admin from "./pages/Admin";
import About from "./pages/About";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />  
        <Route exact path="/department" element={<Department />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<SignUp />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/Cardiology" element={<Cardiology />} />
        <Route exact path="/generalphysician" element={<GeneralPhy />} />
        <Route exact path="/Ent" element={<ENT />} />
        <Route exact path="/dermatology" element={<Dermatology />} />
        <Route exact path="/generalsurgery" element={<GenSur />} />
        <Route exact path="/Neurology" element={<Neurology />} />
        <Route exact path="/Medicine" element={<Medicine />} />
        <Route exact path="/Gynecology" element={<Gynecology />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="*" element={<h4>Page Not Found</h4>} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
