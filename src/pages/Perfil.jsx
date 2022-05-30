import React, { useState } from "react";
import Footer from "../components/Footer";
import Perfil_Info from "../components/Perfil_Info";
import Perfil_Publish from "../components/Perfil_Publish";
import ProfileCard from "../components/ProfileCard";

const Perfil = () => {
  const [informacion, setInformacion] = useState(true);

  const mostrarInformacion = () => {
    setInformacion(true);
  };
  const mostrarPublicaciones = () => {
    setInformacion(false);
  };

  let activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="container container-aboutus mt-5">
        <div className="row">
          <div className="col">
            <h2 className="text-right my-3">Hello!: 'User Name'</h2>
            <p className="text-right text-muted fst-italic mb-3">
              Write a description<i className="bi bi-pen mx-1"></i>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col text-center">
                  <button className="btn my-2" onClick={mostrarInformacion}>
                    information
                  </button>
                </div>
                <div className="col text-center">
                  <button className="btn my-2" onClick={mostrarPublicaciones}>
                    meows
                  </button>
                </div>
                <div className="row">
                  <div className="col">
                    {informacion ? <Perfil_Info /> : <Perfil_Publish />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-4 d-none d-sm-none d-md-block ">
            <ProfileCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Perfil;
