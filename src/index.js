import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/aboutUs.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Perfil_edit from "./components/Perfil_edit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
