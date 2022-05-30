import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import cat1 from "../img/cat1.png";
import "../style/avatar.css";
import ModalAvatar from "./ModalAvatar";

const Perfil_edit = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [userAvatar, setUserAvatar] = useState({
		img: cat1, // traer de la bd
	});
	console.log(userAvatar);

	const saveUserAvatar = () => {
		setUserAvatar({
			...userAvatar,
			img: JSON.parse(localStorage.getItem("userAvatarImg")).avatarImg,
		});
		handleClose();
	};

	const [userForm, setUserForm] = useState({
		name: "", //traer de la base de datos
		bio: "", // traer de la bd
		email: "", //traer de la bd
		password: "", // traer de la bd
		confirmpassword: "",
	});

	const { name, email, bio, password, confirmpassword } = userForm;

	const handleChange = (e) => {
		setUserForm({
			...userForm,
			[e.target.name]: e.target.value,
		});
	};

	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		if (password === confirmpassword) {
			localStorage.setItem("userarray", JSON.stringify(userForm));
			console.log(userForm.name);
		} else {
			return alert("Los emails ingresados no coinciden");
		}
	};
	useEffect(() => {
		setLoading(false);
	}, [name, email, bio, password, confirmpassword]);

	return (
		<>
			<Navbar />
			<div className="container mt-5">
				<div className="row mt-3 text-center">
					<div className="col">
						<h2 className="text-white">User Configuration</h2>
					</div>
				</div>

				<div className="row mt-5 justify-content-center">
					<div className="col-12 col-md-6 col-lg-4">
						<div className="card mb-3">
							<img
								src={userAvatar.img}
								className="rounded mx-auto d-block img-avatar"
								alt="avatar"
							/>
							<div className="card-body text-center">
								<button className="btn btn-sm btn-primary" onClick={handleShow}>
									Change Avatar
								</button>
								<h4 className="card-title mt-2">Name:{userForm.name}</h4>
								<p className="card-text">
									<small className="text-muted">{userForm.email}</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label className="form-label">User Name</label>
								<input
									type="text"
									className="form-control"
									id=""
									aria-describedby=""
									name="name"
									value={name}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Bio</label>
								<input
									type="text"
									className="form-control"
									id="userbio"
									aria-describedby="emailHelp"
									name="bio"
									value={bio}
									onChange={handleChange}
								/>
								<div id="emailHelp" className="form-text">
									Personal information that describe you
								</div>
							</div>
							<div className="mb-3">
								<label className="form-label">Email address</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail"
									aria-describedby="emailHelp"
									name="email"
									value={email}
									onChange={handleChange}
								/>
								<div id="emailHelp" className="form-text">
									We'll never share your email with anyone else.
								</div>
							</div>
							<div className="mb-3">
								<label className="form-label">Password</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPasswordcofimation"
									name="password"
									value={password}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Password Confirmation</label>
								<input
									type="password"
									className="form-control"
									id="confirmpassword"
									name="confirmpassword"
									value={confirmpassword}
									onChange={handleChange}
								/>
							</div>
							<div className="container">
								<div className="row">
									<div className="col">
										<NavLink to="/perfil" className="nav-link">
											Back to Perfil
										</NavLink>
									</div>
									<div className="col">
										<button
											type="submit"
											className="btn btn-success text-start"
											disabled={loading}
										>
											Save
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<ModalAvatar
						show={show}
						handleClose={handleClose}
						saveUserAvatar={saveUserAvatar}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Perfil_edit;
