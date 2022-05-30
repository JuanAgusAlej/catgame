const url = "https://gamer-cat.herokuapp.com/api/usuarios/";


export const getUsuario = async () => {
	const resp = await fetch(`${url}?limite=0&desde=0`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
	const data = await resp.json();
	return data.usuarios;
};

//post de usuario
export const postUsuario = async (data) => {
	const resp = await fetch(`${url}`, {
	  method: "POST",
	  body: JSON.stringify(data),
	  
	});
	const datos = await resp.json();
  
	return datos;
  };
  
  //put de usuario- actualizar
  export const putUsuario = async (id, data) => {
	const resp = await fetch(`${url}usuarios/${id}`, {
	  method: "PUT",
	  body: JSON.stringify(data),
	  headers: {
		"Content-type": "application/json; charset=UTF-8",
		"x-token": JSON.parse(localStorage.getItem("auth")).token,
	  },
	});
	const datos = await resp.json();
  
	return datos;
  };

//delete de usuario
export const deleteUsuario = async (id) => {
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