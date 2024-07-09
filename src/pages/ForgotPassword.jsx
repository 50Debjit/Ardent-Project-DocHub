import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Dochub from "./Home/dochub.jpeg";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");

  const click = (event) => {
    event.preventDefault();
    alert("Submitted");
  };
  return (
    <div
      className="container card card-body mt-5"
      style={{
        height: window.innerHeight - 250,
        maxWidth: 500,
        width: window.innerWidth - 600,
      }}
    >
      <div className="">
        <div className="">
          <img src={Dochub} alt="" className="dochub_logo" />

          <div className=" main mt-3">
            <h3 className="h4 mt-5" id="lg-h4">
              Forgot Password
            </h3>
            <br />

            <form
              id="form"
              className="needs-validation mt-2"
              novalidate
              onSubmit={click}
            >
              <div>
                <input
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.email)}
                  required
                />
                <div className="valid-feedback"> Looks good! </div>
                <div className="invalid-feedback"> Please choose a Email </div>
              </div>

              <button
                className="btn btn-warning  mt-2"
                id="btn-lg"
                type="submit"
              >
                <b>Get OTP</b>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default ForgotPassword;
