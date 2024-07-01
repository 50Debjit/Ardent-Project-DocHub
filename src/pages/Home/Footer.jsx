import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
      <div className="container-fluid" id="footer">
      <footer className="">
<div className="f-info sticky-bottom">
<div className="f-info-social">
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands fa-instagram"></i>
    <i className="fa-brands fa-linkedin"></i>
</div>
    <div className="f-info-body">&copy; DocHub!</div>
    <div className="f-info-link">
        <a href="/privacy">Privacy</a>
        <a href="/term">Terms</a>
    </div>
</div>


</footer>
      </div> 
  )
}
export default Footer;