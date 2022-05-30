import React, { useEffect, useState } from "react";
import { noticias } from "../helpers/peticiones";

const NewsCard = () => {
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

  return nota.datos.map((articulo) => (
    <div className="col col-sm-6 col-md-4 p-3">
      <div className="card1 h-100">
        <div className="card h-100 mb-3 newsCard">
          <img
            src={articulo.urlToImage}
            className="img-fluid news-img"
            alt={articulo.title}
          />
          <div className="card-body">
            <h5 className="card-title fst-italic">{articulo.title}</h5>
            <p className="card-text text-muted articulo">
              {articulo.description}
            </p>

            <div className="text-end">
              <a href={articulo.url} target="_blank">
                <button className="btn">read</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};
export default NewsCard;
