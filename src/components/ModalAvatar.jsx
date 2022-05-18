import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { avatars } from "../datos/avatars";

const ModalAvatar = (props) => {
	const { show, handleClose, saveUserAvatar } = props;

	const [selectedImg, setSelectedImg] = useState({
		avatarImg: "",
	});

	const { avatarImg } = selectedImg;

	const selectImg = (id) => {
		setSelectedImg({
			avatarImg: avatars[id].avatarImg,
		});
		console.log(selectedImg);
		localStorage.setItem("userAvatarImg", JSON.stringify(selectedImg));
	};

	return (
		<>
			<Modal show={show} onHide={handleClose} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Doble Click to select and Done</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="row mt-2">
						{avatars.map((imagen, index) => (
							<div key={index} className="col-12 col-md-4 col-lg-2 mt-2 ">
								<div className="card" onClick={() => selectImg(index)}>
									<img
										src={imagen.avatarImg}
										className="card-img-top img-avatar rounded mx-auto d-block "
										alt="avatares"
									/>
									<div className="card-body">
										<h5 className="card-text text-center fs-6">
											{imagen.name}
										</h5>
									</div>
								</div>
							</div>
						))}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-success" onClick={saveUserAvatar}>
						Done
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalAvatar;
