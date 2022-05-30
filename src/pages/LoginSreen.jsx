import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../img/logo1.jpg";
import LogGoogle from "../components/LogGoogle";
import { postAuth } from "../helpers/auth";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/stylequerry.css";

const LoginSreen = () => {
  const isMounted = useRef(true);

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    correo: "",
    password: "",
  });
  const [btnDisable, setBtnDisable] = useState(false);

  const [login, setLogin] = useState({});

  useEffect(() => {
    if (login.token) {
      localStorage.setItem("auth", JSON.stringify(login));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [login, navigate]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { correo, password } = formValue;

    if (correo && password) {
      setBtnDisable(true);
      if (isMounted.current) {
        postAuth(formValue).then((respuesta) => {
          setLogin(respuesta);

          setBtnDisable(false);

          setFormValue({
            correo: "",
            password: "",
          });
        });
      }
    }
  };

  console.log(formValue);

  return (
    <>
      <Navbar />
      <div className="containerLoguin">
        <div className="row card-login justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="d-flex justify-content-center py-3 bg-light">
                <img src={logo1} alt="logo" className="card-img-top" />
              </div>
              <div className="card-body align-items-center flex-column ">
                <h5 className="card-title text-center">Inicio de Sesion</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3 ">
                    <label>
                      <b>Correo electronico</b>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="correo"
                      value={formValue.correo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>
                      <b>Contraseña</b>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formValue.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="card-end d-flex justify-content-center">
                    <div className="d-grid gap-1 me-3">
                      <button className="btn btn-primary" disabled={btnDisable}>
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                        Ingresar
                      </button>
                    </div>
                    <Link
                      className="boton-inicio btn btn-primary me-3"
                      to="/password"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                    <Link
                      className="boton-inicio btn btn-primary"
                      to="/egister"
                    >
                      Registrate
                    </Link>
                  </div>
                  {login?.msg && (
                    <div
                      className="alert alert-danger alert-dismissible fade show mt-3"
                      role="alert"
                    >
                      {login.msg}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                        onClick={() => setLogin({})}
                      ></button>
                    </div>
                  )}

                  <div className="text-center py-3">
                    <LogGoogle />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginSreen;
