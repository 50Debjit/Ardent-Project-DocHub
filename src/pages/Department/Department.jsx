import React from "react";
import "./Department.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
const Department = () => {
  //Department Page
  return (
    <div className="dept-container">
      <Header />
      <div
        className="container department card"
        style={{
          height: window.innerHeight - 100,
          maxWidth: 1000,
          width: window.innerWidth - 400,
        }}
      >
        <table className="table table-bordered mt-2 ">
          <thead className="table-light table-bordered  ">
            <tr>
              <th s>Departments</th>
              <th>Explore</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>General Physician</td>
              <td>
                <Link to="/generalphysician">
                  <button className="btn btn-success">Visit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>ENT Speacialist</td>
              <td>
                <Link to="/Ent">
                  <button className="btn btn-success">Visit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Dermatology</td>
              <td>
                <Link to="/dermatology">
                  <button className="btn btn-success">Visit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>General surgery</td>
              <td>
                <Link to="/generalsurgery">
                  <button className="btn btn-success">Visit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Neurology</td>
              <td>
                <Link to="/Neurology">
                  <button className="btn btn-success">Visit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Cardiology</td>
              <td>
                <Link to="/Cardiology">
                  <button className="btn btn-success">Visit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Medicine</td>
              <td>
                <Link to="/Medicine">
                  <button className="btn btn-success">Visit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Gynecology</td>
              <td>
                <Link to="/Gynecology">
                  <button className="btn btn-success">Visit</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Department;
