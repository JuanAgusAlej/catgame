import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import logo2 from "../img/logo2.png";
import "../style/login.css";

const RegScreen = () => {
  const [formValue, setFormValue] = useState({
    nombre: "",
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
        <div className="row d-flex align-items-center mt-5">
          <div className="col col-md-6 col-sm-12">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <div className=" mb-3">
                <h2 className="tittle">Sign up</h2>
              </div>
              <div>
                <input
                  type="text"
                  name="nombre"
                  className="form-control mb-3 input"
                  placeholder="Username"
                  required
                  value={formValue.nombre}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  className="form-control mb-3 input"
                  placeholder="Enter your e-mail"
                  required
                  id="exampleInputEmail1"
                  value={formValue.correo}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  className="form-control mb-3 input"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={formValue.password}
                  onChange={handleChange}
                />
              </div>

              <div className="text-end">
                <Link to="/loading">
                  <button className="btn my-4" type="submit" disabled={loading}>
                    sign up
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="col  d-none d-md-block d-sm-none my-5 mx-2">
            <img src={logo2} className="card-img-top" alt="imagen de noticia" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegScreen;
