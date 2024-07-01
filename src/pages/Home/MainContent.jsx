// import "./MainContent.css";
import React from "react";
import "./Home.css";
import DocLogo from './Doctors.jpeg';
const MainContent= ()=> {
    return (
    <main className="main-content">
      <div>
              <img
                src={DocLogo}
                alt="Doctor image"
                className="Doctor_image "
              />   
              </div> 
     </main>
    );
};
export default MainContent;
