const url = "https://gamer-cat.herokuapp.com/api/publicaciones/";


export const getPublicacion = async (limit, size) => {
	const resp = await fetch(`${url}?limit=${limit}&size=${size}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
	const data = await resp.json();
	return data.publicaciones;
};

export const getPublicacionUsuario = async (uid, limit, size ) => {
	const resp = await fetch(`${url}?limit=${limit}&size=${size}&uid=${uid}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
	const data = await resp.json();
	return data.usuarios;
};
export const getPublicacionId = async (id) => {
	const resp = await fetch(`${url}?id=${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
	const data = await resp.json();
	return data.usuarios;
};

//post de usuario
export const postPublicacion = async (dato) => {
	
	const resp = await fetch(`${url}`, {
	  method: "POST",
	  body: JSON.stringify(dato),
	  headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": JSON.parse(localStorage.getItem("auth")).token,
		}
	});
	const datos = await resp.json();
  
	return datos;
};
  
  //put de usuario- actualizar
export const putPublicacion = async (id) => {
	const resp = await fetch(`${url}usuarios/${id}`, {
	  method: "PUT",
	  headers: {
		"Content-type": "application/json; charset=UTF-8",
		"x-token": JSON.parse(localStorage.getItem("auth")).token,
	  },
	});
	const datos = await resp.json();
  
	return datos;
};

//delete de usuario
export const deletePublicacion = async (id) => {
	const resp = await fetch(`${url}${id}`, {
	  method: "DELETE",
  
	  headers: {
		"Content-type": "application/json; charset=UTF-8",
		"x-token": JSON.parse(localStorage.getItem("auth")).token,
	  },
	});
	const datos = await resp.json();
  
	return datos;
};