import { PostType } from "@/types/type";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const getData = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/post?page=1`, {
		cache: "no-store",
	});

	if (!res.ok) {
		console.log("error");
	}

	return res.json();
};

const Posts = async () => {
	const posts: PostType = await getData();
	// console.log(posts);
	return (
		<div className="w-[100%]  p-8">
			<div className="flex my-10 justify-between items-center">
				<h1 className=" text-[32px] font-Croissant">New Articles</h1>
				<Link href={"/post"} className="font-Mooli text-lg hover:underline hover:underline-offset-4">See all</Link>
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
									className="object-cover lg:w-[450px] lg-h-[350px] rounded-md "
								/>
							</div>
							<div className="text-[16px] font-semibold font-anton text-xl hover:underline hover:underline-offset-4">{e?.title}</div>
							<div className="text-[16px] font-Mooli">Views: {e?.views}</div>
						</Link>
					</>
				))}
			</div>
		</div>
	);
};

export default Posts;
