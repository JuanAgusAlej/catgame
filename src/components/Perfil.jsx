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
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-8 col-lg-8">
					<div className="container">
						<div className="row justify-content-between">
							<div className="col text-center">
								<button
									className="btn btn-outline-primary"
									onClick={mostrarInformacion}
									style={informacion ? activeStyle : undefined}
								>
									Información
								</button>
							</div>
							<div className="col text-center">
								<button
									className="btn btn-outline-success"
									onClick={mostrarPublicaciones}
									style={informacion ? undefined : activeStyle}
								>
									Publicaciones
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
				<div className="col-12 col-md-4 col-lg-4 d-none d-md-block d-lg-block">
					<div className="container">
						<div className="row">
							<div className="col">
								<div class="card">
									<img
										src={cat1}
										class="card-img-top img-avatar mx-auto"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title text-center">'User Name'</h5>
										<p className="card-text text-center text-muted">
											'User Email'
										</p>
									</div>
									<ul className="list-group list-group-flush text-center">
										<li className="list-group-item">Age:'x'</li>
										<li className="list-group-item">Sex:'Male'</li>
										<li className="list-group-item">Member since: ''</li>
									</ul>
									<div className="card-body text-center">
										<a href="#" className="card-link">
											User Setting
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Perfil;
