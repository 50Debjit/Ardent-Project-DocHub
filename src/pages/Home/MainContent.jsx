// import "./MainContent.css";
import React from "react";
import "./Home.css";
import DocLogo from "./Doctors.jpeg";
import { Link } from "react-router-dom";
const MainContent = () => {
  return (
    <main className="main-content">
      <div>
        <img src={DocLogo} alt="Doctor image" className="Doctor_image " />

        <h3 className=" maintext  container-fluid" ><b>Protecting You <br/>And Your Family</b></h3> <br></br>
        
      </div>
     <Link to="/department" ><button className="mainbtn">Check Our Services</button></Link>
    </main>
  );
};
export default MainContent;
