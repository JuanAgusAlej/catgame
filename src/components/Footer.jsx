import React from "react";
import { Link } from "react-router-dom";

import "../style/footer.css";

const Footer = () => {
  return (
    <div className="card footer-card">
      <div className="card-body text-muted">
        <div className="col-12">
          {/* <Link to="*"> */}
          <i className="bi bi-facebook mx-1"></i>
          {/* </Link>  */}
          {/* <Link to="*"> */}
          <i className="bi bi-instagram mx-1"></i>
          {/* </Link>  */}
          {/* <Link to="*"> */}
          <i className="bi bi-twitter mx-1"></i>
          {/* </Link>  */}
          {/* <Link to="*"> */}
          <i className="bi bi-github mx-1"></i>
          {/* </Link>  */}
          {/* <Link to="*"> */}
          <i className="bi bi-discord mx-1"></i>
          {/* </Link>  */}
          {/* <Link to="*"> */}
          <i className="bi bi-slack mx-1"></i>
          {/* </Link>  */}
        </div>
        {/* <Link to="*"> */}
        <div className="col-12">About us</div>
        {/* </Link>  */}
        {/* <Link to="*"> */}
        <div className="col-12">Privacy policy</div>
        {/* </Link>  */}
        {/* <Link to="*"> */}
        <div className="col-12">Support us!</div>
        {/* </Link>  */}
        <div className="col-12">©2022 GamerCat</div>
      </div>
    </div>
  );
};

export default Footer;
