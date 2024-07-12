import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div>
      <div className="ContactUs-container">
        <div className="Box">
          <h1 className="h1-1">Contact Us</h1>
          <br />
          <div className="row">
            <div className="col" style={{ paddingLeft: "0px" }}>
              <i className=""></i>
              <h1 className="h1-2">Email Us</h1>
              <Link
                to="mailto:dochub@gmail.com"
                style={{
                  textDecoration: "none",
                  // fontSize: "14px",
                  fontSize: "15px",
                  margin: "10px 0",
                  color: "rgb(21 21 164 / 80%)",
                  fontWeight: "600",
                }}
              >
                dochub@gmail.com
              </Link>
            </div>
            <div className="col" style={{ paddingLeft: "0px" }}>
              <i className=""></i>
              <h1 className="h1-2">Call</h1>
              <p
                style={{
                  // fontSize: "14px",
                  fontSize: "15px",
                  color: "rgb(21 21 164 / 80%)",
                  fontWeight: "600",
                  marginBottom: "0px",
                }}
              >
                +91-0000000000
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col" style={{ paddingLeft: "0px" }}>
              <h1 className="h1-2">Visit</h1>
              <p style={{ marginBottom: "0px" }}>
                <Link
                  to=""
                  style={{
                    textDecoration: "none",
                    // fontSize: "14px",
                    fontSize: "15px",
                    color: "rgb(21 21 164 / 80%)",
                    fontWeight: "600",
                  }}
                >
                  www.dochub.com
                </Link>
              </p>
            </div>
            <div className="col" style={{ paddingLeft: "0px" }}>
              <h1 className="h1-2">Social Links</h1>
              <span>
                <FaFacebook />
                <FaGoogle />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
