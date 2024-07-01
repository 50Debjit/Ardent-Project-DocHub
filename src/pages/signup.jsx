
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import Dochub from "./Home/dochub.jpeg";
import { FaFacebook } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa";
const SignUp = (props) => {

  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [phnno, setphnno] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setconPassword] = useState("");

  const change=event=>{
    setEmail(event.target.value);
    setusername(event.target.value);
    setphnno(event.target.value);
    setPassword(event.target.value);
    setconPassword(event.target.value);
  }
  const click =(event)=>{
    event.preventDefault();
    alert("Submitted");
  }
  return (
      <div
        className="container card card-body mt-4"
        style={{ height: window.innerHeight - 60, maxWidth: 500,width: window.innerWidth - 600 }}>
      
        <div className="">
          <div className="">
          <img src={Dochub} alt="" className="dochub_logo"/>
              
              <div className=" main mt-1">
                <h3 className="h4 mt-5" id="lg-h4">
                 User SignUp Details
                </h3>
              <br/>
              
                
              <form id="form" className="needs-validation mt-0" novalidate onSubmit={click}>
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
             <div>
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setusername(e.target.username)}
                  required
                />
                 <div className="valid-feedback">  Looks good!  </div>
             <div className="invalid-feedback"> Please choose a Email  </div>
             </div> 
             <div>
                <input
                  type="number"
                  value={phnno}
                  placeholder="Phone Number"
                  onChange={(e) => setphnno(e.target.phnno)}
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
             <div className="">
                <input
                  type="password"
                  value={conpassword}
                  placeholder="Confirm Password"
                  onChange={(e) => setconPassword(e.target.conpassword)}
                  required
                />
                <div className="valid-feedback">  Looks good!  </div>
             <div className="invalid-feedback"> Please choose a Password </div>
             </div>
                
                <button className="btn btn-warning  mt-2" id="btn-lg" type="submit" >
                  <b>SignUp</b>
                </button>     
              </form>
              </div>
              <hr/>
              <p>Or SignUp With</p>
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
