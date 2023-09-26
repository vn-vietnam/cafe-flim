"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import useFetch from "@/components/useFetch";
import Link from "next/link";

function Movies() {
	const { data, loading } = useFetch(`/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_KEY_TMDB}`, "");
	// console.log(loading);
	return (
		<div>
			{loading ? (
				<>loading</>
			) : (
				<>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper "
					>
						{data?.results &&
							data?.results.map((e: any) => (
								<SwiperSlide key={e?.id}>
									<Link href={`movies/${e?.id}`}>
										<Image
											src={`https://image.tmdb.org/t/p/original${e?.backdrop_path}`}
											alt="img"
											fill
										/>
									</Link>
									<h1 className="font-anton object-cover text-md sm:text-xl md:text-3xl absolute bottom-[30px]  text-white p-4 rounded capitalize w-[80%] m-auto">
										{e?.title}
									</h1>
								</SwiperSlide>
							))}
					</Swiper>
				</>
			)}
		</div>
	);
}

export default Movies;
