import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.css";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse u-navbar"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#services">
                  services
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#contact">
                  contact
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">
                  about
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="navbar">
        <div className="nav-left">
          <div className="logo">
            <img src="./port.png" alt="" />
          </div>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="##services">services</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Header;
