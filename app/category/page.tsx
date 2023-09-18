"use client";
import ListPosts from "@/components/ListPosts";
import { PostType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Category = () => {
	const params = useSearchParams();
	let category = params.get("cat");
	const [data, setData] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post?cat=${category}`, {
			cache: "no-store",
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, [category]);
	return (
		<div className="w-[100%] min-h-[100vh] bg-yellow-200 p-8">
			<h1 className="my-5 text-[32px] uppercase">{category}</h1>
			{loading ? (
				<>
					<div className="flex justify-center items-center">Loading ...</div>
				</>
			) : (
				<div className="flex gap-5">
					{data.map((e: any) => {
						return (
							<div key={e?.id}>
								<Link
									href={"/post/" + e?.id}
									className="flex flex-col justify-center items-start"
									id={e?.id}
								>
									<Image
										src={
											e?.img ||
											"https://images.unsplash.com/photo-1694159784642-490d23f645a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
										}
										alt="img"
										width={500}
										height={500}
									/>
									<div className="text-[16px] font-semibold">{e?.title}</div>
									<div className="text-[16px]">Views: {e?.views}</div>
								</Link>
							</div>
						);
					})}
				</div>
			)}
			{/* <div className="flex flex-row justify-start gap-5">
				<Link href={"/post?cat=news"}>News</Link>
				<Link href={"/post?cat=newspaper"}>Newspaper</Link>
				<Link href={"/post?cat=blog"}>Blog</Link>
				<Link href={"/post?cat=story"}>Story</Link>
				<Link href={"/post?cat=hot-news"}>Hot news</Link>
			</div>
			<div className="flex justify-between items-center">
				<h1 className="my-5 text-[32px]">New Articles</h1>
			</div>
			<div className="flex justify-between flex-wrap gap-5">
				<ListPosts data={posts} />
			</div> */}
		</div>
	);
};

export default Category;
