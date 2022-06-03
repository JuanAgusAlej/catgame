import React, { useState, useEffect } from "react";
// import { nosotros } from "../datos/nosotros"; prueba para armar maqueteado
import { getNosotros } from "../helpers/nosotrosData";

const AboutUsCard = () => {
  // creo un estado del componente para guardar los datos cuando los reciba

  const [infoNosotros, setInfoNosotros] = useState({
    loading: true,
    datos: [],
  });

  //para traer los datos de la Base de Datos que armemos
  useEffect(() => {
    getNosotros().then((respuesta) => {
      // console.log(respuesta);
      setInfoNosotros({
        loading: false,
        datos: respuesta,
      });
    });
  }, []);

  return (
    <React.Fragment>
      {infoNosotros.datos.map((datos, index) => (
        <div key={index} className="col col-md-4 col-sm-12 mx-2 mt-2">
          <div className="card mb-3 w-100 h-100">
            <img
              src={datos.imagen}
              className="card-img-top rounded mx-auto d-block  redondo card-avatar-about"
              alt="AboutUs"
            />
            <div className="card-body text-center">
              <p className="card-text fs-4">{datos.name}</p>
              <i className="bi bi-envelope mx-1"></i>
              <p className="card-text text-email fw-lighter">{datos.email}</p>
              <p
                className={
                  datos.skill[0] === "BackEnd"
                    ? "badge bg-success text-wrap"
                    : "badge bg-warning text-black text-wrap"
                }
              >
                {datos.skill[0]}
              </p>
              <p className="badge bg-info text-wrap ms-1">{datos.skill[1]}</p>
              <p className="fs-6 fw-lighter">
                {" "}
                Linked
                <a href={datos.linkedin}>
                  <i className="bi bi-linkedin" style={{ fontSize: 20 }}></i>
                </a>
              </p>
              {/* <p className="fs-6">{datos.gitUser}</p> */}
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default AboutUsCard;
