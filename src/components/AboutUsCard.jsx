import React, { useState, useEffect } from "react";
import { getNosotros } from "../helpers/nosotrosData";

const AboutUsCard = () => {

  const [infoNosotros, setInfoNosotros] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    getNosotros().then((respuesta) => {
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
          <div className="card card-us mb-3 w-100 h-100">
            <img
              src={datos.imagen}
              className="card-img-top rounded mx-auto d-block redondo card-avatar-about"
              alt=""
            />
            <div className="card-body text-center">
              <p className="card-text fs-4">{datos.name}</p>
              <p className="card-text text-email fw-lighter">
                <i className="bi bi-envelope mx-1"></i>
                {datos.email}
              </p>
              <p className="badge bg-light text-black text-wrap">
                {datos.skill[1]}
              </p>
              <p
                className={
                  datos.skill[0] === "BackEnd"
                    ? "badge bg-light text-black text-wrap"
                    : "badge bg-light text-black text-wrap"
                }
              >
                {datos.skill[0]}
              </p>

              <div className="text-end">
                <a href={datos.linkedin} target="_blank">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default AboutUsCard;
