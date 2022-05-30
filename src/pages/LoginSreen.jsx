import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../img/logo1.png";
import LogGoogle from "../components/LogGoogle";
import { postAuth } from "../helpers/loguin";
// import "../css/style.css";

const LoginSreen = () => {

  const isMounted = useRef(true);

  const history = useNavigate();
  
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
        history("/");
      }, 1000);
    }
  }, [login, history]);

  // useEffect(() => {
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, []);


  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(formValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { correo, password } = formValue;
    console.log(correo, password);
    if (correo && password) {
      setBtnDisable(true);
      console.log(isMounted.current)
      if (isMounted.current) {
        
        postAuth(formValue).then((respuesta) => {
          console.log(respuesta + "respuesta");
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

  return (
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
                <div className="card-end d-flex justify-content-between ">
                  <div className="d-grid gap-1">
                    <button className="boton-inicio btn btn-primary" disabled={btnDisable}>
                      <i className="fa fa-sign-in me-2" aria-hidden="true"></i>
                      Ingresar
                    </button>
                  </div>
                  <Link className="boton-inicio btn btn-primary" to="/password">
                    ¿Olvidaste tu contraseña?
                  </Link>
                  <Link className="boton-inicio btn btn-primary" to="/regScreen">
                    Registrate
                  </Link>
                </div>
                <div className="text-center py-3">
                  <LogGoogle />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSreen;
