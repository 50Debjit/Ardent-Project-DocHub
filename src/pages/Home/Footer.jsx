import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container-fluid" id="footer">
      <footer className="">
        <div className="f-info sticky-bottom">
          <div className="f-info-body">&copy; DocHub!</div>
          <div className="f-info-link">
            <span>
              <FaFacebook />
              <FaGoogle />
              <FaInstagram />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
