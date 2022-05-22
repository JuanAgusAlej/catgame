import React, { useEffect, useState } from "react";
import { noticias } from "../helpers/peticiones";
import "../css/stylequerry.css";

const CardNoticias = () => {
  const [nota, setNota] = useState({
    loading: true,
    datos: [],
  });
  useEffect(() => {
    noticias().then((respuesta) => {
      console.log(respuesta);
      setNota({
        loading: false,
        datos: respuesta,
      });
    });
  }, []);
  return (
    <div className="container">
      <div className="row d-flex mb-3">
        {nota.datos.map((articulo) => (
          <div className="col col-sm-6 col-md-4 p-3">
            <div className="card cardName">
              <img
                src={articulo.urlToImage}
                className="card-img-top"
                alt="imagen de noticia"
              />
              <div className="card-body ">
                <h5 className="card-title">{articulo.title}</h5>
                <p className="card-text">{articulo.description}</p>
                <a href={articulo.url} className="btn btn-primary">
                  Ver noticia
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardNoticias;
