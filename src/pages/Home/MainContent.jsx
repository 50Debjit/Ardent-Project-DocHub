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

        {/* <Link to="/booking"> <button className="btn bookbtn btn-lg container-fluid" ><b>Book Appointment</b></button></Link>  */}
      </div>
    </main>
  );
};
export default MainContent;
