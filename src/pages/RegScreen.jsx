import React, { useState } from "react";
import logo from "../img/logo.jpg";
import "../css/style.css";

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
    <div className="container">
      <div className="rowPass d-flex align-items-center">
        <div className="col-6 ">
          <form className="d-flex flex-column">
            <div className="mb-3">
              <label className="form-label">Nombre de Usuario</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder=""
                required
                value={formValue.nombre}
                onChange={handleChange}
              />
              <label className="form-label">Correo electronico</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                value={formValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formValue.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </form>
        </div>
        <div className="col">
          <img src={logo} className="card-img-top" alt="imagen de noticia" />
        </div>
      </div>
    </div>
  );
};

export default RegScreen;
