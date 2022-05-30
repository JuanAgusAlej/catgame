import React from "react";
import { usuarios } from "../datos/usuarios";

import "../style/admin.css";
const Admin = () => {
  return (
    <div className="container admin-container shadow-lg my-5">
      <div className="row my-3 mt-2">
        <h2 className="config">Admin: User configuration</h2>
      </div>

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
              {usuarios.map((usuario) => (
                <tr key={usuario.uid}>
                  <th scope="row">{usuario.first_name}</th>
                  <td className="fw-light fs-6 text-center">{usuario.email}</td>
                  <td className="fw-light fs-6 text-center">{usuario.email}</td>
                  <td className="delete-btn">
                    <button className="btn btn-sm ms-3" onClick="">
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
