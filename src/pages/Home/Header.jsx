import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Dochub from "./dochub.jpeg";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-nav">
       
      <div className="container-fluid">
         
        {/* //DocHub logo */}
        <Link className="nav-link" to="/">
          <img src={Dochub} alt="" className="dochub_logomain" />{" "}
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">
                Contact{" "}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link "
                href="#"
                role="button"
                aria-expanded="false"
                to="/department"
              >
                Department
              </Link>
            </li>
          </ul>
          {/* Search Button */}
          <form className="d-flex" role="search"> 
            <input
              className="form-control search me-3  "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn search-btn" type="submit">
              <FaSearch />
            </button>

            <div className="btn mt-2">
              <Link
                to="/registration"
                className="btn signup mt-4"
                id="snup-btn"
              >
                SignUp
              </Link>
              <Link to="/login" className="btn  signin mt-4">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
