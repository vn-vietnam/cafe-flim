import { PostType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/post`, {
		cache: "no-store",
	});

	if (!res.ok) {
		console.log("error");
	}

	return res.json();
};

export default async function Post() {
	const posts: PostType = await getData();
	// console.log(posts);

	return (
		<div className="w-[100%] min-h-[100vh] p-8 flex flex-col gap-3">
			<div className="flex gap-3 font-anton">
				<Link href={"/"}>Main</Link>
				<div> {">"} </div>
				<div>Posts</div>
			</div>
			<div className="flex flex-row flex-wrap justify-start gap-5 font-Noto font-[500]">
				<Link href={"/category?cat=news"}>News</Link>
				<Link href={"/category?cat=newspaper"}>Newspaper</Link>
				<Link href={"/category?cat=blog"}>Blog</Link>
				<Link href={"/category?cat=story"}>Story</Link>
				<Link href={"/category?cat=hot-news"}>Hot news</Link>
			</div>
			<div className="flex justify-between items-center">
				<h1 className=" text-[32px] my-5 font-Croissant">New Articles</h1>
			</div>
			<div className="flex md:justify-between  justify-center w-[100%]  flex-wrap gap-5">
				{posts?.map((e) => (
					<>
						<Link
							href={"/post/" + e?.id}
							className=" flex flex-col gap-3 justify-start  items-start"
							id={e?.id}
						>
							<div className="">
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
							</div>
							<div className="text-[16px] font-semibold w-[80%] text break-all lien font-anton text-xl hover:underline hover:underline-offset-4">
								{e?.title}
							</div>
							<div className="text-[16px] font-Mooli">Views: {e?.views}</div>
						</Link>
					</>
				))}
			</div>
		</div>
	);
}
