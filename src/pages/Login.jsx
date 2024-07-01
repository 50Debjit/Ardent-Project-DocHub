
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Dochub from "./Home/dochub.jpeg";
import { FaFacebook } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa";

const SignUp = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click =(event)=>{
    event.preventDefault();
    alert("Submitted");
  }
  return (
      <div
        className="container card card-body mt-5"
        style={{ height: window.innerHeight - 150, maxWidth: 500,width: window.innerWidth - 600 }}>
      
        <div className="">
          <div className="">
          <img src={Dochub} alt="" className="dochub_logo"/>
              
              <div className=" main mt-1">
                <h3 className="h4 mt-5" id="lg-h4">
                 User Login Details
                </h3>
              <br/>
              
                
              <form id="form" className="needs-validation" novalidate onSubmit={click}>
              <div>
                <input
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.email)}
                  required
                />
                 <div className="valid-feedback">  Looks good!  </div>
             <div className="invalid-feedback"> Please choose a Email  </div>
             </div>
            
             <div className="">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.password)}
                  required
                />
                <div className="valid-feedback">  Looks good!  </div>
             <div className="invalid-feedback"> Please choose a Password </div>
             
             </div>
             <Link to="/forgot-password" id="fg-ps">
                    Forgot your password?
                  </Link>
                <button className="btn btn-warning  mt-2" id="btn-lg" type="submit" >
                  <b>Login</b>
                </button>
                <div className="text-left">
                    <small>
                      Don't have an account ?{" "}
                      <Link to="/Registration" id="sgn-up-lnk">
                        Sign Up
                      </Link>
                    </small>
                  </div>    
              </form>
              </div>
              <hr/>
              <p>Or Login With</p>
              <div className="socialmedia ">
          <div className="socialmedia1 "> <FaFacebook /></div>
          <div className="socialmedia1"><FaGoogle /></div>
          </div>
            </div>
          </div>
         
        </div>
    // </div>
    
   
  );
};
export default SignUp;
