import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../img/logo1.png";
import LogGoogle from "../components/LogGoogle";
import "../style/login.css";
import Footer from "../components/Footer";

const LoginSreen = () => {
  // const history = useHistory();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formValue);

  return (
    <>
      <div className="container container-login">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card login-card">
              <div className="d-flex justify-content-center py-3">
                <img src={logo1} alt="logo" className="img-login" />
              </div>
              <div className="card-body align-items-center flex-column ">
                <h2 className="card-title tittle my-3">Log In</h2>
                <form>
                  <div className="form-group mb-3 ">
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="form-control mb-3 "
                      name="correo"
                      required
                      value={formValue.correo}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="form-control mb-3"
                      name="password"
                      required
                      value={formValue.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="card-end d-flex justify-content-between ">
                    <div className="d-grid gap-1">
                      <button className="btn mb-3">log in</button>
                    </div>
                    <Link className="btn mb-3" to="/password">
                      forgot your password?
                    </Link>
                    <Link className="btn mb-3" to="/register">
                      sign up
                    </Link>
                  </div>
                  <div className="text-center py-3">
                    <LogGoogle />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginSreen;
