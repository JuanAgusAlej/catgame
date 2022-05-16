import React from "react";
import { Link } from "react-router-dom";

import "../style/footer.css";

const Footer = () => {
  return (
    <div className="card footer-card">
      <div className="card-body text-muted">
        <div className="col-12">
          {/* <Link to="*"> */}
          <i class="bi bi-facebook"></i>
          {/* </Link>  */}
          {/* <Link to="*"> */}
          <i class="bi bi-instagram"></i>
          {/* </Link>  */}
          {/* <Link to="*"> */}
          <i class="bi bi-twitter"></i>
          {/* </Link>  */}
          {/* <Link to="*"> */}
          <i class="bi bi-github"></i>
          {/* </Link>  */}
          {/* <Link to="*"> */}
          <i class="bi bi-discord"></i>
          {/* </Link>  */}
          {/* <Link to="*"> */}
          <i class="bi bi-slack"></i>
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
