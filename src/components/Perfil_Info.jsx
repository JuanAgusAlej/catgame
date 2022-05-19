import React from "react";
import Cat1 from "../img/cat1.png";

const Perfil_Info = () => {
	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col">
					<ul className="list-group">
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Post #<span className="badge bg-primary rounded-pill">14</span>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Followers
							<span className="badge bg-primary rounded-pill">2</span>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Following
							<span className="badge bg-primary rounded-pill">1</span>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Likes
							<span className="badge bg-primary rounded-pill">1</span>
						</li>
					</ul>
					<div className="card border-info mb-3 mt-3">
						<div className="card-header">Personal Bio</div>
						<div className="card-body">
							<p className="">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eligendi cupiditate magnam natus modi minus voluptatibus, eos
								dignissimos? Cumque eveniet maxime dolorem, atque facilis
								eligendi sapiente, accusamus esse voluptatibus eum magni.
							</p>
						</div>
					</div>
					<div className="card border-info mb-3">
						<div className="card-header">Favorites Games</div>
						<div className="card-body">
							<p className="">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eligendi cupiditate magnam natus modi minus voluptatibus, eos
								dignissimos? Cumque eveniet maxime dolorem, atque facilis
								eligendi sapiente, accusamus esse voluptatibus eum magni.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Perfil_Info;
