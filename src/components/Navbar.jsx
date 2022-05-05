import React from "react";
import logo from "../img/logo.png";

import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container gamercat-cont">
        {/* <Link to="/"> */}
        <div>
          <img
            src={logo}
            alt="GamerCat"
            className="img-logo mx-2"
            width="100px"
          />
        </div>
        {/* </Link>  */}
        <div className="logo-name mx-1">
          <b>
            G<span>am</span>er<span>C</span>at
          </b>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item m-4">
              {/* <Link to="*"> */}
              nav-item
              {/* </Link> */}
            </li>
            <li className="nav-item m-4">
              {/* <Link to="*">  */}
              nav-item
              {/* </Link>   */}
            </li>
            <li className="nav-item m-4">
              {/* <Link to="*">  */}
              nav-item
              {/* </Link>  */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
