import React from "react";
import Cat1 from "../img/cat1.png";

const Perfil_Info = () => {
	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col">
					<div className="card border-info mb-3">
						<div className="card-header">Header</div>
						<div className="card-body">
							<h5 className="card-title">Info card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
					<div className="card border-info mb-3">
						<div className="card-header">Header</div>
						<div className="card-body">
							<h5 className="card-title">Info card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>

					<ul className="list-group">
						<li className="list-group-item d-flex justify-content-between align-items-center">
							A list item
							<span class="badge bg-primary rounded-pill">14</span>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							A second list item
							<span class="badge bg-primary rounded-pill">2</span>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							A third list item
							<span className="badge bg-primary rounded-pill">1</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Perfil_Info;
