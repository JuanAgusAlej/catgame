import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SearchUser from "../components/SearchUser";

import { deleteUsuario, getUsuario } from "../helpers/usuario";

import "../style/admin.css";
const Admin = () => {
  const [infoUsuario, setInfoUsuario] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    updateDatos();
  }, []);
  const updateDatos = () => {
    getUsuario().then((respuesta) => {
      setInfoUsuario({
        loading: false,
        datos: respuesta,
      });
    });
  };

  const borrarUsuario = (uid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "User will be disabled",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF3270",
      cancelButtonColor: "#12a696",
      confirmButtonText: "yeah, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUsuario(uid).then((respuesta) => {
          if (respuesta.msg) {
            Swal.fire({
              icon: "info",

              text: respuesta.msg,
            });
          } else {
            Swal.fire("Deleted!", "User disabled", "success");
            updateDatos();
          }
        });
      }
    });
  };
  return (
    <div className="container admin-container shadow-lg my-5">
      <div className="row my-3 mt-2">
        <h2 className="tittle">admin: user configuration</h2>
      </div>

      <SearchUser />

      <div className="row">
        <div className="col">
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th scope="col">user name</th>
                <th scope="col">email</th>
                <th scope="col">#meows</th>
                <th scope="col">configuration</th>
              </tr>
            </thead>
            <tbody>
              {infoUsuario.datos.map((usuario) => (
                <tr key={usuario.uid}>
                  <th scope="row">{usuario.nombre}</th>
                  <td className="fw-light fs-6 text-center">
                    {usuario.correo}
                  </td>
                  <td className="fw-light fs-6 text-center">{usuario.email}</td>
                  <td className="delete-btn">
                    <button
                      className="btn btn-sm ms-3"
                      onClick={() => borrarUsuario(usuario.uid)}
                    >
                      disable
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
