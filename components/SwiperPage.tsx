"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
const fetcher = async (url: any) => {
	const res = await fetch(url);

	const data = await res.json();

	if (!res.ok) {
		const error = new Error(data.message);
		throw error;
	}
	return data;
};
function SwiperPage() {
	const { data, isLoading } = useSWR(
		`${process.env.NEXT_PUBLIC_URL}api/post?page=1`,
		fetcher
	);
	// console.log(data);
	return (
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
				className="swiper "
			>
				{isLoading ? (
					<div className="animate-pulse">
						<SwiperSlide>
							<div className="bg-slate-200 w-[100%] h-[100%]"></div>
						</SwiperSlide>
					</div>
				) : (
					<>
						{data.map((e: any) => {
							return (
								<SwiperSlide key={e?.id}>
									<Link href={`/post/${e?.id}`}>
										<Image src={e?.img || "/bg.jpg"} alt="" fill />
									</Link>
									<h1 className="font-anton object-cover text-md sm:text-xl md:text-3xl absolute bottom-[30px]  text-white p-4 rounded capitalize w-[80%] m-auto">
										{e?.title}
									</h1>
								</SwiperSlide>
							);
						})}
					</>
				)}

				
			</Swiper>
		</>
	);
}

export default SwiperPage;
