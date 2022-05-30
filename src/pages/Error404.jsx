import React from "react";
import errorimg from "../img/errorimg.png";
import { Link } from "react-router-dom";

import "../style/error.css";

const Error404 = () => {
  return (
    <div className="error">
      {/* <Link to="/"> */}
      <img src={errorimg} alt="Error 404" className="img-Error" />
      {/* </Link> */}
    </div>
  );
};

export default Error404;
