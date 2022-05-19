export const getNosotros = async () => {
	const resp = await fetch();
	const data = await resp.json();
	return data;
};
