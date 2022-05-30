import React, { useState } from "react";
import { usuariosPost } from "../helpers/usuarios";
import logo from "../img/logo.png";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/stylequerry.css";

const RegScreen = () => {
  const [formValue, setFormValue] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const limpiarCampos = () => {
    setFormValue({
      nombre: "",
      email: "",
      password: "",
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

    usuariosPost(formValue).then((respuesta) => {
      if (respuesta.errors) {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: respuesta.errors[0].msg,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "OK",
          text: `El usuario ${formValue.nombre} fue creado`,
        });
      }
      limpiarCampos();
    });
  };

  return (
    <>
      <Navbar />
      <div className="containerreg">
        <div className="rowPass d-flex align-items-center">
          <div className="col-6 ms-5">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
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
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => usuariosPost({})}
              >
                Registrar
              </button>
            </form>
          </div>
          <div className="col">
            <img src={logo} className="card-img-top" alt="imagen de noticia" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegScreen;
