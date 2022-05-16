import React from "react";
import Perfil from "./components/Perfil";
import Perfil_edit from "./components/Perfil_edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<HomeScreen/>} />
				<Route path="about" element={<AboutUs />} /> */}
				<Route path="perfil" element={<Perfil />} />
				<Route path="/perfil/edit" element={<Perfil_edit />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
