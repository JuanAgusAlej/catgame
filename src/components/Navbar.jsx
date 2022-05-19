import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";

import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark d-flex">
      <div className="container gamercat-cont">
        {/* <Link to="/"> */}
        <div>
          <img
            src={logo}
            alt="GamerCat"
            className="img-logo mx-2 d-none d-md-block d-sm-none"
            width="100px"
          />
        </div>

        <div className="logo-name mx-1 d-none d-md-block d-sm-none">
          <b>
            G<span>am</span>er<span>C</span>at
          </b>
        </div>
        {/* </Link>  */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item m-4">
            {/* <Link to="*"> */}
            <i className="bi bi-house"></i>
            {/* </Link> */}
          </li>
          <li className="nav-item m-4">
            {/* <Link to="*"> */}
            <i className="bi bi-person"></i>
            {/* </Link> */}
          </li>
          <li className="nav-item m-4">
            {/* <Link to="*"> */}
            <i className="bi bi-bell"></i>
            {/* </Link> */}
          </li>
          <li className="nav-item m-4">
            {/* <Link to="*">  */}
            <i className="bi bi-newspaper"></i>
            {/* </Link>   */}
          </li>
          <li className="nav-item m-4">
            {/* <Link to="*">  */}
            <i className="bi bi-box-arrow-right"></i>
            {/* </Link>  */}
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;