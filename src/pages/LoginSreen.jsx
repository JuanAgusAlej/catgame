import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../img/logo1.png";
import LogGoogle from "../components/LogGoogle";
import { postAuth } from "../helpers/loguin";
import Footer from "../components/Footer";

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

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
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

  return (
    <>
      <div className="container container-login">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card login-card">
              <div className="d-flex justify-content-center py-3">
                <img src={logo1} alt="logo GamerCat" className="img-login" />
              </div>
              <div className="card-body align-items-center flex-column ">
                <h2 className="card-title tittle my-3">log in</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="correo"
                      autocomplete="off"
                      required
                      value={formValue.correo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
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
                      <button
                        className="boton-inicio btn mb-3"
                        disabled={btnDisable}
                      >
                        <i
                          className="fa fa-sign-in me-2"
                          aria-hidden="true"
                        ></i>
                        log in
                      </button>
                    </div>
                    <Link className="boton-inicio btn" to="/password">
                      forgot your password?
                    </Link>
                    <Link className="boton-inicio btn" to="/regScreen">
                      join us
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
      <Footer />
    </>
  );
};

export default LoginSreen;
