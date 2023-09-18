import { PostType } from "@/types/type";
import Link from "next/link";
import React from "react";
import ListPosts from "./ListPosts";

const getData = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/post?page=1`,
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
	return (
		<div className="w-[100%] min-h-[100vh] bg-yellow-200 p-8">
			
			<div className="flex justify-between items-center">
				<h1 className="my-5 text-[32px]">New Articles</h1>
				<Link href={"/post"}>See all</Link>
			</div>
			<div className="flex justify-between flex-wrap gap-5">
				<ListPosts data={posts} />
			</div>
		</div>
	);
};

export default Posts;
