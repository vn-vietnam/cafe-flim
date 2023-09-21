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
					<Image
						src={
							"https://images.unsplash.com/photo-1694843690023-3d936b2e83b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
						}
						alt="img"
						fill
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<Image
						src={
							"https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						}
						alt="img"
						fill
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<Image
						src={
							"https://images.unsplash.com/photo-1683009427666-340595e57e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						}
						alt="img"
						fill
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<Image
						src={
							"https://images.unsplash.com/photo-1682686581218-82326951f4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						}
						alt="img"
						fill
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<Image
						src={
							"https://images.unsplash.com/photo-1694373283206-90ce4a58d236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						}
						alt="img"
						fill
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<Image
						src={
							"https://images.unsplash.com/photo-1694952751871-4c60120ec470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						}
						alt="img"
						fill
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<Image
						src={
							"https://images.unsplash.com/photo-1694802465429-86a9fc096c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						}
						alt="img"
						fill
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<Image
						src={
							"https://images.unsplash.com/photo-1683009427598-9c21a169f98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						}
						alt="img"
						fill
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<Image
						src={
							"https://images.unsplash.com/photo-1673267569891-ca4246caafd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						}
						alt="img"
						fill
						objectFit="cover"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}

export default SwiperPage;
