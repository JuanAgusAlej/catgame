import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../img/logo2.png";
import "../style/stylequerry.css";

const Password = () => {
  const [formValue, setFormValue] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formValue);
  return (
    <div className="container container-login">
      <div className="row d-flex align-items-center">
        <div className="col">
          <h2 className="tittle">Forgot your password?</h2>
          <label
            for="exampleInputEmail1"
            className="form-label fst-italic my-3"
          >
            Enter your e-mail to reset your password
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your e-mail"
            className="form-control mt-2"
            id="exampleInputEmail1"
            value={formValue.email}
            onChange={handleChange}
          />
          <div className="text-end">
            <Link to="*">
              <button type="submit" className="btn my-4">
                submit
              </button>
            </Link>
          </div>
        </div>
        <div className="col d-none d-md-block d-sm-none">
          <img
            src={logo2}
            className="card-img-top  my-5 mx-2"
            alt="Gamer Cat"
          />
        </div>
      </div>
    </div>
  );
};

export default Password;