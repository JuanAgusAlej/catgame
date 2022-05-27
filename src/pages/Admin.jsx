import React from "react";
import SearchUser from "../components/SearchUser";
import { usuarios } from "../datos/usuarios";

const Admin = () => {
	return (
		<>
			<div className="container border border-dark border-4 shadow-lg mt-5 vh-100">
				<div className="row  border-bottom border-dark mb-3 mt-2 fst-italic">
					<h1>Admin: User configuration</h1>
				</div>
				<SearchUser />
				<div className="row">
					<div className="col">
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">User Name</th>
									<th scope="col">Email</th>
									<th scope="col">#Post</th>
									<th scope="col">Configuration</th>
								</tr>
							</thead>
							<tbody>
								{usuarios.map((usuario) => (
									<tr key={usuario.uid}>
										<th scope="row">{usuario.first_name}</th>
										<td className="fw-light fs-6">{usuario.email}</td>
										<td className="fw-light fs-6">{usuario.email}</td>
										<td>
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
		</>
	);
};

export default Admin;
