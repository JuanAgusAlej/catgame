import React from "react";
import cat1 from "../img/cat1.png";
import "../style/avatar.css";

const Perfil_edit = () => {
	return (
		<div className="container mt-5">
			<div className="row mt-3 text-center">
				<div className="col">
					<h2>User Configuration</h2>
				</div>
			</div>

			<div className="row mt-5">
				<div className="col-12 col-md-6 col-lg-4 offset-md-2">
					<div class="card mb-3">
						<img
							src={cat1}
							class="rounded mx-auto d-block img-avatar"
							alt="..."
						/>
						<div className="card-body text-center">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Select your Avatar here</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-4">
					<form>
						<div className="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								User Name
							</label>
							<input
								type="text"
								class="form-control"
								id=""
								aria-describedby=""
							/>
						</div>
						<div className="mb-3">
							<label for="" class="form-label">
								Bio
							</label>
							<input
								type="text"
								class="form-control"
								id=""
								aria-describedby=""
							/>
							<div id="emailHelp" class="form-text">
								Personal information that describe you
							</div>
						</div>
						<div className="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Email address
							</label>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
							<div id="emailHelp" class="form-text">
								We'll never share your email with anyone else.
							</div>
						</div>
						<div className="mb-3">
							<label for="exampleInputPassword1" class="form-label">
								Password
							</label>
							<input
								type="password"
								class="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleInputPassword1" class="form-label">
								Password Confirmation
							</label>
							<input
								type="password"
								class="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<button type="submit" class="btn btn-success">
							Save
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Perfil_edit;
