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

function SwiperPage() {
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
				<SwiperSlide>
					<h1 className="font-Croissant text-3xl ">image 1</h1>
				</SwiperSlide>
				<SwiperSlide>
					<h1 className="font-Croissant text-3xl ">image 2</h1>
				</SwiperSlide>
				<SwiperSlide>
					<h1 className="font-Croissant text-3xl ">image 3</h1>
				</SwiperSlide>
				<SwiperSlide>
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
				</SwiperSlide>
			</Swiper>
		</>
	);
}

export default SwiperPage;
