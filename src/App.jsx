import React from "react";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle";

import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import CardNoticias from "./pages/CardNoticias";
import Contraseña from "./pages/Contraseña";
import Error404 from "./pages/Error404";
import Feed from "./pages/Feed";
import LoginScreen from "./pages/LoginSreen";
import Perfil from "./pages/Perfil";
import RegScreen from "./pages/RegScreen";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<LoginScreen />} />
				<Route
					path="/"
					element={
						<ProtectedRoutes>
							<Feed />
						</ProtectedRoutes>
					}
				/>
				<Route path="aboutus" element={<AboutUs />} />
				<Route path="perfil" element={<Perfil />} />
				<Route path="admin" element={<Admin />} />
				<Route path="/egister" element={<RegScreen />} />
				<Route path="password" element={<Contraseña />} />
				<Route path="noticias" element={<CardNoticias />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
