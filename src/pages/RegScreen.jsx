import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../img/logo1.png";
import "../style/login.css";
import { postUsuario } from "../helpers/usuario.js";
import Swal from "sweetalert2";


const RegScreen = () => {

  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    nombre: "",
    correo: "",
    password: ""
    
  });
  const limpiarCampos = () => {
    setFormValue({
      nombre: "",
      correo: "",
      password: ""
      
    });
  };
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
        }
           
      });
    }
  };

  

  return (
    <div className="container container-login">
      <div className="row d-flex align-items-center mt-5">
        <div className="col-6 ">
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Username"
                required
                value={formValue.nombre}
                onChange={handleChange}
              />
              <input
                type="correo"
                name="correo"
                className="form-control"
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
            <button className="btn" type="submit"  disabled={loading}>
              registrar
            </button>
          </form>
        </div>
        <div className="col">
          <img src={logo1} className="card-img-top" alt="imagen de noticia" />
        </div>
      </div>
    </div>
  );
};

export default RegScreen;
