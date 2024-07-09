import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Specialization.css";
// import Header from "../Home/Header";
// import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
const Dermatology = () => {
  return (
    <div>
      {/* <Header/> */}

      <div className="Cardiology-container">
        <h3 className="doctext">Doctors List</h3>
        <div className=" doctors card ">
          <img
            className="doctors-img"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
          />
          <div className="body">
            <h4>Dr.DC</h4>
            <h5>Degree:MBBS</h5>
            <h5>Clinic Name:Howrah</h5>
            <h5>Contact Details:123456</h5>
            <Link to="/booking">
              {" "}
              <Button className="btn btn-success">Book</Button>
            </Link>
          </div>
        </div>

        <div className=" doctors card">
          <img
            className="doctors-img"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
            alt=""
            srcset=""
          />
          <div className="body">
            <h4>Dr.DC</h4>
            <h5>Degree:MBBS</h5>
            <h5>Clinic Name:Howrah</h5>
            <h5>Contact Details:123456</h5>
            <Link to="/booking">
              {" "}
              <Button className="btn btn-success">Book</Button>
            </Link>
          </div>
        </div>

        <div className=" doctors card">
          <img
            className="doctors-img"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
            alt=""
            srcset=""
          />
          <div className="body">
            <h4>Dr.DC</h4>
            <h5>Degree:MBBS</h5>
            <h5>Clinic Name:Howrah</h5>
            <h5>Contact Details:123456</h5>
            <Link to="/booking">
              {" "}
              <Button className="btn btn-success">Book</Button>
            </Link>
          </div>
        </div>

        <div className=" doctors card">
          <img
            className="doctors-img"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
            alt=""
            srcset=""
          />
          <div className="body">
            <h4>Dr.DC</h4>
            <h5>Degree:MBBS</h5>
            <h5>Clinic Name:Howrah</h5>
            <h5>Contact Details:123456</h5>
            <Link to="/booking">
              {" "}
              <Button className="btn btn-success">Book</Button>
            </Link>
          </div>
        </div>
        <div className=" doctors card">
          <img
            className="doctors-img"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
            alt=""
            srcset=""
          />
          <div className="body">
            <h4>Dr.DC</h4>
            <h5>Degree:MBBS</h5>
            <h5>Clinic Name:Howrah</h5>
            <h5>Contact Details:123456</h5>
            <Link to="/booking">
              {" "}
              <Button className="btn btn-success">Book</Button>
            </Link>
          </div>
        </div>
        <div className=" doctors card">
          <img
            className="doctors-img"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
            alt=""
            srcset=""
          />
          <div className="body">
            <h4>Dr.DC</h4>
            <h5>Degree:MBBS</h5>
            <h5>Clinic Name:Howrah</h5>
            <h5>Contact Details:123456</h5>
            <Link to="/booking">
              {" "}
              <Button className="btn btn-success">Book</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dermatology;
