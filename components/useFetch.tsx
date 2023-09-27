"use client";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";
type IDataMovies = {
	results: [
		{
			poster_path: string;
			backdrop_path: string;
			title: string;
			id: number;
		}
	];
	page: number;
};


const useFetch = (url: string, params: string) => {
	const [data, setData] = useState<IDataMovies | null>(null);
	const [loading, setLoading] = useState<boolean | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		setData(null);
		setError(null);

		fetchDataFromApi(url, params)
			.then((res) => {
				setLoading(false);
				setData(res);
			})
			.catch((err) => {
				setLoading(false);
				setError("Something went wrong!");
			});
	}, [url, params]);

	return { data, loading, error };
};

export default useFetch;
