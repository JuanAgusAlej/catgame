import React from "react";
import errorimg from "../img/errorimg.png";
import { Link } from "react-router-dom";

import "../style/error.css";

const Error404 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="error">
            <Link to="/">
              <img src={errorimg} alt="Error 404" className="img-Error" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
