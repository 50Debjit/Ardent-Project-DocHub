import "./Home.css";
import React from "react";
import MainContent from "./MainContent";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      {/* //Go to Header.jsx */}
      <Header />
      {/* //Go to MainContent.jsx */}
      <MainContent />
      {/* // Go to Footer.jsx */}
      <Footer />
    </>
  );
};

export default Home;
