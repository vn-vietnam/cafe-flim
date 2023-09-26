import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
	Authorization: "bearer " + process.env.NEXT_PUBLIC_TOKEN_TMDB,
};

export const fetchDataFromApi = async (url: string, params: any) => {
	try {
		const { data } = await axios.get(BASE_URL + url, {
			headers,
			params,
		});
		return data;
	} catch (err) {
		console.log(err);
		return err;
	}
};
