import React from "react";
import { Modal, Button } from "react-bootstrap";
import { avatars } from "../../datos/avatars";

const ModalAvatar = (props) => {
	const { show, handleClose } = props;

	return (
		<>
			<Modal show={show} onHide={handleClose} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="row mt-2">
						{avatars.map((imagen, index) => (
							<div key={index} className="col-12 col-md-4 col-lg-2 mt-2">
								<div className="card">
									<img
										src={imagen.avatarImg}
										className="card-img-top img-avatar rounded mx-auto d-block "
										alt="avatares"
									/>
									<div className="card-body">
										<h5 className="card-text text-center fs-6">
											{imagen.name}
										</h5>
										<div className="form-check">
											<input
												className="form-check text-center"
												type="checkbox"
												value=""
												id="flexCheckDefault"
											/>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalAvatar;
