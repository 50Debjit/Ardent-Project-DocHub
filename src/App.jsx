import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/Home/Home";
import Login from './pages/Login';
import SignUp from './pages/signup';
import ForgotPassword from './pages/ForgotPassword';
import ContactUs from './pages/ContactUs';
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route exact path="/About" element={<About />} /> */}
         <Route exact path="/ContactUs" element={<ContactUs />} /> 
         <Route exact path="/login" element={<Login /> }/>       
           <Route exact path="/registration" element={<SignUp />} /> 
       <Route exact path="/forgot-password" element={<ForgotPassword />} /> 
        {/* <Route exact path="/reset-password" element={<ResetPassword />} />  */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App
