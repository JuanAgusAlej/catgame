import React from "react";
import { usuarios } from "../datos/usuarios";

const Admin = () => {
	return (
		<div className="container border border-dark border-4 mt-5">
			<div className="row  border-bottom border-dark mb-3">
				<h1>Admin</h1>
			</div>
			<div className="row">
				<div className="col">
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">User Name</th>
								<th scope="col">Email</th>
								<th scope="col">Information</th>
								<th scope="col">
									<button className="btn btn-success" onClick="">
										Add
									</button>
								</th>
							</tr>
						</thead>
						<tbody>
							{usuarios.map((usuario) => (
								<tr key={usuario.uid}>
									<th scope="row">{usuario.first_name}</th>
									<td>{usuario.email}</td>
									<td>{usuario.email}</td>
									<td>
										<button className="btn btn-warning btn-sm" onClick="">
											edit
										</button>
										<button className="btn btn-danger btn-sm ms-3" onClick="">
											delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Admin;
