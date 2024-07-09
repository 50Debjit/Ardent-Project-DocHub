import React, { useState } from "react";
import "./Booking.css";
import { Link } from "react-router-dom";

const Booking = () => {
  const [username, setusername] = useState("");
  const [age, setage] = useState("");
  const [dob, setdob] = useState("");
  const [phnnum, setphnnum] = useState("");
  const click = (event) => {
    event.preventDefault();
    alert("Submitted");
  };
  return (
    //Booking Page
    <div>
      <div className="ContactUs-container">
        <div className="Box">
          <h1 className="h1-1 ">Booking Form</h1>
          <br />
          <form id="form" className="" onSubmit={click}>
            <div>
              <input
                type="text"
                value={username}
                placeholder="Name"
                onChange={(e) => setusername(e.target.username)}
                required
              />
            </div>

            <div className="">
              <input
                type="number"
                value={age}
                placeholder="Age"
                onChange={(e) => setage(e.target.age)}
                required
              />
            </div>
            <div className="">
              <input
                type="date"
                value={dob}
                placeholder="Date Of Birth"
                onChange={(e) => setdob(e.target.dob)}
                required
              />
            </div>
            <div className="">
              <input
                type="number"
                value={phnnum}
                placeholder="Phone Number"
                onChange={(e) => setphnnum(e.target.phnnum)}
                required
              />
            </div>
            <button className="btn btn-warning  mt-2" id="btn-lg" type="submit">
              <b>Book</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
