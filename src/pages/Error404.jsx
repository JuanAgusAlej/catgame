import React from "react";
import errorimg from "../img/errorimg.png";
import { Link } from "react-router-dom";

import "../style/error.css";

const Error404 = () => {
  return (
    <div className="error">
      <img src={errorimg} alt="Error 404" className="img-Error" />
    </div>
  );
};

export default Error404;
