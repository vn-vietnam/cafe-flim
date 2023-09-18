import { PostType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
	const res = await fetch(`https://cafe-flim-git-new-vn-vietnam.vercel.app/api/post`, {
		cache: "no-store",
	});

	if (!res.ok) {
		console.log("error");
	}

	return res.json();
};

export default async function Post() {
	const posts: PostType = await getData();

	return (
		<div className="w-[100%] min-h-[100vh] bg-yellow-200 p-8">
			<div className="flex flex-row justify-start gap-5">
				<Link href={"/category?cat=news"}>News</Link>
				<Link href={"/category?cat=newspaper"}>Newspaper</Link>
				<Link href={"/category?cat=blog"}>Blog</Link>
				<Link href={"/category?cat=story"}>Story</Link>
				<Link href={"/category?cat=hot-news"}>Hot news</Link>
			</div>
			<div className="flex justify-between items-center">
				<h1 className="my-5 text-[32px]">New Articles</h1>
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
								src={e?.img as string}
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
}
