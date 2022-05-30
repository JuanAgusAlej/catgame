let url = "https://gamer-cat.herokuapp.com/api/aboutuses";

export const getNosotros = async () => {
	const resp = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
	const data = await resp.json();
	return data.aboutUses;
};
