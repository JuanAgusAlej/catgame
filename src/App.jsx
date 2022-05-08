import React from "react";
import AboutUsCard from "./components/AboutUsCard";
import Perfil from "./components/Perfil";

const App = () => {
	return (
		<div>
			{/* para montar componente de AboutUs */}
			{/* <div className="container">
				<div className="row mt-5 justify-content-center">
					<AboutUsCard />
				</div>
			</div> */}
			<Perfil />
		</div>
	);
};

export default App;
