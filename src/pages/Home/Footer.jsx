import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container-fluid " id="footer">
      <footer className="">
        <div className="f-info sticky-bottom">
          <div className="f-info-body">
            {" "}
            <Link to="/about">
              <h6 className="about">About Us</h6>
            </Link>{" "}
          </div>
          <div className="f-info-link">
            {/* <section>
          <span >
              <FaFacebook />
              <FaGoogle />
              <FaInstagram />
            </span>
            </section> */}

            <span>
              <h5 className="f-info-link">Emergemcy care</h5>
              <button className="footerbtn">8772244666</button>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
