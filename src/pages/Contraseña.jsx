import React, { useState } from "react";
import perfil from "../img/perfil.jpg";
import "../css/stylequerry.css";

const Contraseña = () => {
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
    <div className="container">
      <div className="rowPass d-flex align-items-center">
        <div className="col">
          <h1>¿Olvidaste tu contraseña?</h1>
          <br />
          <h3>Ingresa tu Correo para recuperarla</h3>
          <label for="exampleInputEmail1" className="form-label">
            Correo electronico asociado a tu cuenta
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            value={formValue.email}
            onChange={handleChange}
          />
          <button type="submit" className="btnPass btn-primary mt-2">
            Submit
          </button>
        </div>
        <div className="col">
          <img src={perfil} className="card-img-top" alt="imagen de noticia" />
        </div>
      </div>
    </div>
  );
};

export default Contraseña;
