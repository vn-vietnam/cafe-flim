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
	
	return (
		<div className="w-[100%]  p-8">
			<div className="flex my-10 justify-between items-center">
				<h1 className=" text-[20px] font-Croissant">New Articles</h1>
				<Link
					href={"/post"}
					className="font-Mooli text-[16px] hover:underline hover:underline-offset-4 px-4 py-2 bg-black rounded-full text-white "
				>
					See all
				</Link>
			</div>
			<div className="flex md:justify-between text-[16px]  justify-center w-[100%]  flex-wrap gap-5">
				{posts?.map((e) => (
					<>
						<Link
							href={"/post/" + e?.id}
							className=" flex flex-col gap-3 justify-start  items-start "
							id={e?.id}
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
									className="object-cover h-[300px] w-[400px] lg:w-[450px] lg-h-[350px] rounded-md opacity-90"
								/>
								<div className="text-[16px] font-Mooli absolute bottom-0 left-0 rounded-bl rounded-tr p-2 font-bold capitalize text-white bg-slate-400">
									{e?.catSlug}
								</div>
							</div>
							<div className="text-[16px] w-[300px] font-anton text-xl break-words hover:underline hover:underline-offset-4">
								{e?.title}
							</div>
						</Link>
					</>
				))}
			</div>
		</div>
	);
};

export default Posts;
