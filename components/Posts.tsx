import { PostType } from "@/types/type";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const getData = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_URL}api/post?page=1`,
		{
			cache: "no-store",
		}
	);

	if (!res.ok) {
		console.log("error");
	}

	return res.json();
};

const Posts = async () => {
	const posts: PostType = await getData();
	// console.log(posts);
	return (
		<div className="w-[100%] min-h-[100vh] bg-yellow-200 p-8">
			<div className="flex justify-between items-center">
				<h1 className="my-5 text-[32px]">New Articles</h1>
				<Link href={"/post"}>See all</Link>
			</div>
			<div className="flex justify-between flex-wrap gap-5">
				{posts?.map((e) => (
					<>
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
					</>
				))}
			</div>
		</div>
	);
};

export default Posts;


