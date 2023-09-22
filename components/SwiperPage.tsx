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
				className="mySwiper "
			>
				{isLoading ? (
					<>
						<SwiperSlide>
							<div className="relative">
								<Image src={"/bg.jpg"} alt="" fill  />
							</div>
						</SwiperSlide>
					</>
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

				{/* <SwiperSlide>
					<Image
						src={
							"https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
						}
						alt=""
						fill
					/>
					<h1 className="font-Croissant object-cover text-3xl absolute left-[50px] bottom-[50px] bg-slate-500 text-white p-4 rounded capitalize">
						image 1
					</h1>
				</SwiperSlide> */}

				{/* <SwiperSlide>
					<h1 className="font-Croissant text-3xl ">image 4</h1>
				</SwiperSlide>
				<SwiperSlide>
					<h1 className="font-Croissant text-3xl ">image 5</h1>
				</SwiperSlide>
				<SwiperSlide>
					<h1 className="font-Croissant text-3xl ">image 6</h1>
				</SwiperSlide>
				<SwiperSlide>
					<h1 className="font-Croissant text-3xl ">image 7</h1>
				</SwiperSlide>
				<SwiperSlide>
					<h1 className="font-Croissant text-3xl ">image 8</h1>
				</SwiperSlide>
				<SwiperSlide>
					<h1 className="font-Croissant text-3xl ">image 9</h1>
				</SwiperSlide> */}
			</Swiper>
		</>
	);
}

export default SwiperPage;
