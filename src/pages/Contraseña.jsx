import React, { useState } from "react";
import perfil from "../img/logo.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/stylequerry.css";

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
    <>
      <Navbar />
      <div className="containerpass">
        <div className="rowPass d-flex align-items-center">
          <div className="col ms-5">
            <h1>¿Olvidaste tu contraseña?</h1>
            <br />
            <h3>Ingresa tu Correo para recuperarla</h3>
            <label for="exampleInputEmail1 " className="form-label">
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
            <img src={perfil} className="imgpass" alt="imagen de noticia" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contraseña;
