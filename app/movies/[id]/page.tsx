"use client";
import Carousel from "@/components/Carousel";
import VideoMovies from "@/components/VideoMovies";
import { fetchDataFromApi } from "@/utils/api";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type IMovies = {
	backdrop_path: string;
	genres: { id: number; name: string }[];
	id: string;
	imdb_id: string;
	original_title: string;
	overview: string;
	poster_path: string;
	release_date: string;
	status: string;
	tagline: string;
	title: string;
	vote_average: string;
	runtime: number;
};

function SingleMovies() {
	const param = useParams();
	const [data, setData] = useState<IMovies | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	// console.log(data);
	useEffect(() => {
		setLoading(true);

		fetchDataFromApi(
			`/movie/${param.id}?api_key=${process.env.NEXT_PUBLIC_KEY_TMDB}`,
			""
		)
			.then((res) => {
				setLoading(false);
				setData(res);
			})
			.catch((err) => {
				setLoading(false);
				setError(true);
			});
	}, []);
	const toHoursAndMinutes = (totalMinutes: number) => {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
	};

	const dataSimilar = {
		name: "Similar Movies",
		endPoint: "similar",
		id: data?.id,
	};
	const dataVideos = {
		name: "Videos",
		endPoint: "videos",
		id: data?.id,
	};
	return (
		<div className="">
			{loading ? (
				<>loading</>
			) : (
				<>
					<div className="p-8 w-[100%]  ">
						<div className="flex flex-col sm:flex-row gap-10 ">
							<Image
								width={300}
								height={400}
								alt="img"
								src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
							/>
							<div className="flex flex-col text-[14px] gap-5">
								<h1 className="text-[20px] font-Croissant">{data?.title}</h1>
								<i className=" font-Noto">{data?.tagline}</i>
								<h1>{data?.release_date}</h1>
								<h1>Status: {data?.status}</h1>
								<h1>IMDB: {data?.vote_average}</h1>
								<h1>Time: {toHoursAndMinutes(data?.runtime || 0)}</h1>
								<h1>{data?.overview}</h1>
								<h1 className="flex flex-row gap-3">
									{data?.genres.map((e) => (
										<div key={e.id}>
											<div>{e.name}</div>
										</div>
									))}
								</h1>
							</div>
						</div>
						{/* similar */}
					</div>
					<VideoMovies dataType={dataVideos}/>
					<Carousel dataType={dataSimilar} />
				</>
			)}
		</div>
	);
}

export default SingleMovies;
