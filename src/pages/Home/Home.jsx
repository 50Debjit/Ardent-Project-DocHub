import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import DocLogo from './Doctors.jpeg'
import MainContent from "./MainContent";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Header/>
     
     <MainContent/>
     
     <Footer/>
    
    </>
  );
};

export default Home;
