import React, { useState, useEffect } from "react";
import { nosotros } from "../datos/nosotros";
import { getNosotros } from "../helpers/nosotrosData";

const AboutUsCard = () => {
	// creo un estado del componente para guardar los datos cuando los reciba

	const [infoNosotros, setInfoNosotros] = useState({
		loading: true,
		datos: [],
	});

	//para traer los datos de la Base de Datos que armemos
	useEffect(() => {
		getNosotros().then((respuesta) => {
			setInfoNosotros({
				loading: false,
				datos: respuesta,
			});
		});
	}, []);

	// creo estato de componente para poder mostrar en detalle de la persona de About Us al hacer click en Show

	const [show, setShow] = useState(false);

	return (
		<React.Fragment>
			<h1 className="fs-1 fst-italic text-center mb-5">About Us</h1>
			{nosotros.map((nosotros, index) => (
				<div key={index} className="col-12 col-md-4 col-lg-2 mx-2">
					<div className="card mb-3 w-150">
						<img
							src={nosotros.avatar}
							className="card-img-top redondo"
							alt=""
						/>
						<div className="card-body text-center">
							<p className="card-text fs-4">
								{nosotros.first_name} {nosotros.last_name}
							</p>
							<p className="card-text fs-6 fw-lighter">{nosotros.email}</p>
							<p className="badge bg-warning text-dark text-wrap">
								{nosotros.skill}
							</p>
							<div className="row text-center">
								<div className="col">
									<button
										className="btn btn-info text-light btn-sm"
										onClick={() => setShow(!show)}
									>
										Conoce más...
									</button>
									{show && <p> {nosotros.description} </p>}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default AboutUsCard;