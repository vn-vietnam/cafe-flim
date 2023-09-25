"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Category = () => {
	const params = useSearchParams();
	let category = params.get("cat");
	const [data, setData] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_URL}api/post?cat=${category}`, {
			cache: "no-store",
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, [category]);
	return (
		<div className="w-[100%] min-h-[100vh] p-8 flex flex-col gap-3">
			<div className="flex gap-3 font-anton">
				<Link href={"/"}>Main</Link>
				<div> {">"} </div>
				<Link href={"/post"}>Posts</Link>
				<div> {">"} </div>
				<div className="capitalize">{category}</div>
			</div>
			<div className="flex flex-row flex-wrap justify-start gap-5 font-Noto font-[500]">
				<Link href={"/category?cat=news"}>News</Link>
				<Link href={"/category?cat=newspaper"}>Newspaper</Link>
				<Link href={"/category?cat=blog"}>Blog</Link>
				<Link href={"/category?cat=story"}>Story</Link>
				<Link href={"/category?cat=hot-news"}>Hot news</Link>
			</div>
			<div className="flex justify-between items-center">
				<h1 className=" text-[32px] my-5 font-Croissant capitalize">{category}</h1>
			</div>
			<div className="flex md:justify-between  justify-start w-[100%]  flex-wrap gap-5">
				{data?.map((e) => (
					
						<Link
							href={"/post/" + e?.id}
							className=" flex flex-col gap-3 justify-start  items-start"
							id={e?.id}
							key={e?.id}
						>
							<div className="w-[100%] relative">
								<Image
									src={
										e?.img ||
										"https://images.unsplash.com/photo-1694159784642-490d23f645a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
									}
									alt="img"
									width={300}
									height={150}
									className="object-cover h-[300px] w-[400px] lg:w-[450px] lg-h-[350px] rounded-md "
								/>
								<div className="text-[16px] font-Mooli absolute bottom-0 left-0 rounded-bl rounded-tr p-2 font-bold capitalize text-white bg-slate-400">
									{e?.catSlug}
								</div>
							</div>
							<div className="text-[16px]  w-[400px] h-[80px] lg:w-[450px]  text break-all lien font-anton text-xl hover:underline hover:underline-offset-4">
								{e?.title}
							</div>
							
						</Link>
					
				))}
			</div>
		</div>
	);
};

export default Category;

