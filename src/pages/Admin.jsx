import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SearchUser from "../components/SearchUser";
import { usuarios } from "../datos/usuarios";
import { deleteUsuario, getUsuario } from "../helpers/getUsuario";

import "../style/admin.css";
const Admin = () => {

  const [infoUsuario, setInfoUsuario] = useState({
		loading: true,
		datos: [],
	});

	//para traer los datos de la Base de Datos que armemos
  useEffect(() => {
    updateDatos()
		
  }, []);
  const updateDatos = () => {
    getUsuario().then((respuesta) => {
			// console.log(respuesta);
			setInfoUsuario({
				loading: false,
				datos: respuesta,
			});
		});
  };
  
  //---------------------------
  const borrarUsuario = (uid) => {
      Swal.fire({
      title: "Esta seguro?",
      text: "El usuario será inactivado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#7B7A7A",
      confirmButtonText: "Si, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        deleteUsuario(uid).then((respuesta) => {
          if (respuesta.msg) {
            Swal.fire({
              icon: "info",

              text: respuesta.msg,
            });
          } else {
            Swal.fire("Borrado!", "El usuario ha sido borrado.", "success");
            updateDatos();
          }
          
        });
      }
    })
  };
  return (
    <div className="container admin-container shadow-lg my-5">
      <div className="row my-3 mt-2">
        <h2 className="config">Admin: User configuration</h2>
      </div>

      <SearchUser />

      <div className="row">
        <div className="col">
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">#Post</th>
                <th scope="col">Configuration</th>
              </tr>
            </thead>
            <tbody>
              {infoUsuario.datos.map((usuario) => (
                <tr key={usuario.uid}>
                  <th scope="row">{usuario.nombre}</th>
                  <td className="fw-light fs-6 text-center">{usuario.correo}</td>
                  <td className="fw-light fs-6 text-center">{usuario.email}</td>
                  <td className="delete-btn">
                    <button className="btn btn-sm ms-3" onClick={() => borrarUsuario(usuario.uid)}>
                      delete
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
