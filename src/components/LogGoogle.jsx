import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "825371476343-sufpc0ktnthsm3e73b28o8jtpseck547.apps.googleusercontent.com";

const LogGoogle = () => {
  const onSuccess = (res) => {
    console.log("Ingresaste Correctamente", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Error al ingresar", res);
  };
  return (
    <div id="signInBotton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Ingresar con Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={`single_host_origin`}
      />
    </div>
  );
};

export default LogGoogle;
