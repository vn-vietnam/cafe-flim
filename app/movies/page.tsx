import Carousel from "@/components/Carousel";
import SwiperMovies from "@/components/SwiperMovies";
import React from "react";

type IData = {
	name: string;
	slugFirst: string;
	nameSecond: string;
};

const dataType = {
	name: "Now Playing",
	endPoint: "now_playing",
};
const dataTypePopular = {
	name: "Popular",
	endPoint: "popular",
};
const dataTypeTopRated = {
	name: "Top Rated",
	endPoint: "top_rated",
};

function Movies() {
	return (
		<div>
			<SwiperMovies />
			<Carousel dataType={dataTypePopular} />
			<Carousel dataType={dataTypeTopRated} />
			<Carousel dataType={dataType} />
		</div>
	);
}

export default Movies;
