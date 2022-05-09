import React, { useState } from "react";
import Perfil_Info from "./Perfil_Info";
import Perfil_Publish from "./Perfil_Publish";
import cat1 from "../img/cat1.png";

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
		<div className="container mt-5">
			<div className="row">
				<div className="col">
					<h2 className="text-right">Hello!: 'User Name'</h2>
					<p className="text-right fs-6 fst-italic">
						En esta pagína encontrarás toda la información sobre tu usuario y
						configuraciones
					</p>
					<div className="card mb-3 mt-3">
						<div className="row g-0">
							<div className="col-md-4 text-center">
								<img src={cat1} className="img-fluid rounded-start" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">First-Name Last_Name</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<p className="card-text">
										<small className="text-muted">
											Last updated 3 mins ago
										</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-6 col-md-6 col-lg-3 text-center">
					<button
						className="btn btn-outline-primary"
						onClick={mostrarInformacion}
						style={informacion ? activeStyle : undefined}
					>
						Información
					</button>
				</div>
				<div className="col-6 col-md-6 col-lg-3 text-center">
					<button
						className="btn btn-outline-success"
						onClick={mostrarPublicaciones}
						style={informacion ? undefined : activeStyle}
					>
						Publicaciones
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col">
					{informacion ? <Perfil_Info /> : <Perfil_Publish />}
				</div>
			</div>
		</div>
	);
};

export default Perfil;
