import React, { useState } from "react";
import logo1 from "../img/logo1.png";
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
    <div className="container container-login">
      <div className="row d-flex align-items-center mt-5">
        <div className="col-6 ">
          <form className="d-flex flex-column">
            <div className="mb-3">
              {/* <label className="form-label">Nombre de Usuario</label> */}
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Username"
                required
                value={formValue.nombre}
                onChange={handleChange}
              />
              {/* <label className="form-label">Correo electronico</label> */}
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your e-mail"
                id="exampleInputEmail1"
                value={formValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              {/* <label className="form-label">Password</label> */}
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn">
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
