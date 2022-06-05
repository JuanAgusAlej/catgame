import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../img/logo1.png";
import "../style/login.css";
import { postUsuario } from "../helpers/usuario.js";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

const RegScreen = () => {
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const [formValue, setFormValue] = useState({
    nombre: "",
    correo: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const { nombre, correo, password } = formValue;

    if (nombre && correo && password) {
      postUsuario(formValue).then((respuesta) => {
        if (respuesta.errors) {
          setLoading(false);
          return Swal.fire({
            icon: "error",
            title: "Error",
            text: respuesta.errors[0].msg,
          });
        } else {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "OK",
            text: `El usuario ${formValue.nombre} fue creado`,
          });
          history("/login");
        }
      });
    }
  };

  return (
    <>
      <div className="container container-login">
        <div className="row d-flex align-items-center mt-5">
          <div className="col col-md-6 col-sm-12">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <div className=" mb-3">
                <h2 className="tittle">Sign up</h2>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="nombre"
                  className="form-control my-3 input"
                  placeholder="Username"
                  required
                  value={formValue.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="correo"
                  name="correo"
                  className="form-control mb-3 input"
                  placeholder="Enter your e-mail"
                  id="exampleInputEmail1"
                  value={formValue.correo}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={formValue.password}
                  onChange={handleChange}
                />
              </div>
              <div className="text-end">
                <button className="btn my-4" type="submit" disabled={loading}>
                  sign up
                </button>
              </div>
            </form>
          </div>
          <div className="col  d-none d-md-block d-sm-none my-5 mx-2">
            <img src={logo1} className="card-img-top" alt="GamerCat Logo" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegScreen;
