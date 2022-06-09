import React from "react";
import logo from "../img/logo.png";
import logo_neon from "../img/logo_neon.gif";
import { Link } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";

import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark d-flex">
      <div className="container gamercat-cont">
        <Link to="/">
          <div>
            <img
              src={logo}
              alt="GamerCat"
              className="img-logo mx-2 d-none d-md-block d-sm-none"
              width="100px"
            />
          </div>
        </Link>
        <Link to="/">
          <div className="logo-name mx-1 d-none d-md-block d-sm-none">
            <img src={logo_neon} alt="GamerCatNeon" />
          </div>
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item m-4">
            <Link to="/">
              <i className="bi bi-house"></i>
            </Link>
          </li>
          <li className="nav-item m-4">
            <Link to="/profile">
              <i className="bi bi-person"></i>
            </Link>
          </li>
          <li className="nav-item m-4">
            <Link to="/aboutus">
              <i className="bi bi-people"></i>
            </Link>
          </li>
          <li className="nav-item m-4">
            <Link to="/news">
              <i className="bi bi-newspaper"></i>
            </Link>
          </li>
          <li className="nav-item m-4">
            <Link to="/login">
              <i className="bi bi-box-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
