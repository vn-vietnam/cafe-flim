import { PostType } from "@/types/type";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Posts = async () => {
	return (
		<div className="w-[100%] min-h-[100vh] bg-yellow-200 p-8">
			<div className="flex justify-between items-center">
				<h1 className="my-5 text-[32px]">New Articles</h1>
				<Link href={"/post"}>See all</Link>
			</div>
		</div>
	);
};

export default Posts;
