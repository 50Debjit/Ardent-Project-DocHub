import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import Dochub from "./Home/dochub.jpeg";
import Header from "./Home/Header";
import Footer from "./Home/Footer";

const Admin=()=>{
    return (
      <div className="body">
       <Header/>

        <div className="main-container-admin">
          <div className="navcontainer">
            <nav className="nav-admin">
              <div className="nav-upper-options">
                <div className="nav-option option1">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3344/3344008.png"
                    className="nav-img"
                    alt="dashboard"
                  />
                  <h3> Dashboard</h3>
                </div>

                <div className="nav-option option2">
                  <img
                    src="https://st4.depositphotos.com/1842549/21096/i/450/depositphotos_210965144-stock-photo-report-icon.jpg"
                    className="nav-img"
                    alt="report"
                  />
                  <h3> Report</h3>
                </div>

                <div className="nav-option option3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5_RwINiKVQ5dOsG2b8DO5DU1lfRoFx5Lag&s"
                    className="nav-img"
                    alt="blog"
                  />
                  <h3> Profile</h3>
                </div>

                <div className="nav-option option4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSugW9q0D1XBZOAbbV5toScjjAd3CkK--N6w&s"
                    className="nav-img"
                    alt="settings"
                  />
                  <h3> Settings</h3>
                </div>

                <div className="nav-option logout">
                  <img
                    src="data:image/jpeg;base64,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"
                    className="nav-img"
                    alt="logout"
                  />
                  <h3>Logout</h3>
                </div>
              </div>
            </nav>
          </div>
          <div className="main-admin">
            <div className="searchbar2">
              <input type="text" name="" id="" placeholder="Search" />
              <div className="searchbtn">
                <img
                  src="https://www.iconpacks.net/icons/2/free-search-icon-2911-thumb.png"
                  className="icn srchicn"
                  alt="search-button"
                />
              </div>
            </div>

            <div className="box-container-admin">
              <div claclassNamess="box box1">
                <div className="text">
                  <h2 className="topic-heading">50K</h2>
                  <h2 className="topic">User</h2>
                </div>

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFNe0yoa6jIN6jf_53CPX9MYtMkAx_w5klw&s"
                  alt="user"
                />
              </div>

              <div className="box box2">
                <div className="text">
                  <h2 className="topic-heading">41K</h2>
                  <h2 className="topic">Likes</h2>
                </div>

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhl3Yfm9VpGar1xpCbyGnQiU5dv873VPQkFg&s"
                  alt="likes"
                />
              </div>

              <div className="box box3">
                <div className="text">
                  <h2 className="topic-heading">965</h2>
                  <h2 className="topic">Reviews</h2>
                </div>

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcLuyV7DH4zBWPeRkRnckpoRVLWtb1YuEFg&s"
                  alt="comments"
                />
              </div>

              <div className="report-container">
                <div className="report-header">
                  <h1 className="recent-Articles">Doctor</h1>
                  <button className="view">View All</button>
                </div>

                <div className="container69">
                  <div className="jumbotron ">
                    <div className="card">
                      <div className="card-header">List of the Doctors</div>
                      <div className="card-body">
                        <section className="table_body">
                          <table className="table table-dark table-hover table-bordered table-responsive">
                            <thead>
                              <th scope="col">ID</th>
                              <th scope="col">Email</th>
                              <th scope="col">Password</th>
                              <th scope="col">Name</th>
                              <th scope="col">PhnNumber</th>
                              <th scope="col">Gender</th>
                              <th scope="col">Department</th>
                              <th scope="col">Schedule</th>
                              <th scope="col">Address</th>
                              <th class="text-center">ACTIONS</th>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <th>2441139</th>
                                <th>pritam@mail.com</th>
                                <th>Pritam Ghosh</th>
                                <th>1234567890</th>
                                <th>Male</th>
                                <th>cardio</th>
                                <th>Mon-Fri-Sat</th>
                                <th>8,Belaabose road </th>
                                <td class="text-center">
                                  <button className="btn btn-success ">
                                    ACCEPT
                                  </button>
                                  <button className="btn btn-danger ">
                                    REJECT
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <th>2</th>
                                <th>2441139</th>
                                <th>Debjit@mail.com</th>
                                <th>DEBU da</th>
                                <th>1234567890</th>
                                <th>Male</th>
                                <th>cardio</th>
                                <th>Mon-Fri-Sat</th>
                                <th>8,Belaabose road </th>
                                <td class="text-center">
                                  <button className="btn btn-success ">
                                    ACCEPT
                                  </button>
                                  <button className="btn btn-danger ">
                                    REJECT
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <th>3</th>
                                <th>2441139</th>
                                <th>Nabankur@mail.com</th>
                                <th>Nabankur</th>
                                <th>1234567890</th>
                                <th>Male</th>
                                <th>cardio</th>
                                <th>Mon-Fri-Sat</th>
                                <th>8,Belaabose road </th>
                                <td className="text-center">
                                  <button className="btn btn-success ">
                                    ACCEPT
                                  </button>
                                  <button className="btn btn-danger ">
                                    REJECT
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <th>4</th>
                                <th>2441139</th>
                                <th>Kollyan@mail.com</th>
                                <th>kol</th>
                                <th>1234567890</th>
                                <th>Male</th>
                                <th>cardio</th>
                                <th>Mon-Fri-Sat</th>
                                <th>8,Belaabose road </th>
                                <td className="text-center">
                                  <button className="btn btn-success ">
                                    ACCEPT
                                  </button>
                                  <button className="btn btn-danger ">
                                    REJECT
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
    };

  
export default Admin;
