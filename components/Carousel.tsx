"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "@/styles/style.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";
import useFetch from "./useFetch";

function Carousel(dataType: any) {
	// console.log(dataType?.dataType?.name);
	const slug = dataType?.dataType?.slugFirst;
	const [change, setChange] = useState("movie");
	const { data, loading } = useFetch(
		`/${change}/${dataType?.dataType?.endPoint}?api_key=${process.env.NEXT_PUBLIC_KEY_TMDB}`,
		""
	);
	console.log(data);

	return (
		<div className="p-8 flex flex-col gap-5">
			<div className="flex flex-row justify-between items-center">
				<div className="text-[20px] font-Croissant my-3">
					{dataType?.dataType?.name}
				</div>

				{dataType?.dataType?.endPoint === "now_playing" ? (
					<></>
				) : (
					<>
						<div className="flex text-[14px] font-Mooli flex-row gap-5 justify-between bg-black text-white font-[600] px-5 py-3 rounded-full">
							<div
								className={`cursor-pointer ${
									change === "movie" ? "text-red-500" : "text-white"
								}  `}
								onClick={(e) => setChange("movie")}
							>
								Movie
							</div>
							<div className=" w-[1px] bg-white"></div>
							<div
								className={`cursor-pointer ${
									change === "tv" ? "text-red-500" : "text-white"
								}  `}
								onClick={(e) => setChange("tv")}
							>
								TV
							</div>
						</div>
					</>
				)}
			</div>

			{loading ? (
				<Swiper
					spaceBetween={10}
					centeredSlides={true}
					// className="mySwiper "
				></Swiper>
			) : (
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						"@0.00": {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						"@0.30": {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						"@0.5": {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						"@0.70": {
							slidesPerView: 4,
							spaceBetween: 30,
						},
						"@0.90": {
							slidesPerView: 5,
							spaceBetween: 20,
						},
						"@1.3": {
							slidesPerView: 7,
							spaceBetween: 20,
						},
					}}
					freeMode={true}
					modules={[FreeMode, Pagination]}
					className="mySwiper"
				>
					{data?.results &&
						data?.results.map((e: any) => (
							<>
								<SwiperSlide key={e?.id}>
									<Link
										href={`movies/${e?.id}`}
										className="rounded-xl w-[200px] h-full relative"
									>
										<div className=" w-full h-full absolute top-0 left-0 opacity-0 duration-100 z-40 bg-white hover:opacity-70 flex justify-center items-center flex-col p-2 gap-3 rounded-xl">
											<div className=" text-[16px] font-Noto font-[600]">
												{e?.title}
											</div>
											<div className=" text-[14px] font-Noto">
												{e?.release_date}
											</div>
										</div>
										<Image
											src={`https://image.tmdb.org/t/p/original${e?.backdrop_path}`}
											alt=""
											fill
											className="rounded-xl"
										/>
										<div className="absolute top-2 right-2 bg-slate-700 text-white text-[14px] font-Croissant w-10 h-10 rounded-full flex justify-center items-center">
											{e?.vote_average.toFixed(1)}
										</div>
									</Link>
								</SwiperSlide>
							</>
						))}
				</Swiper>
			)}
		</div>
	);
}

export default Carousel;
