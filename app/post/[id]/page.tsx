"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import CommentSinglePost from "@/components/CommentSinglePost";
import WriteComment from "@/components/WriteComment";

function SinglePost() {
	const params = useParams();
	const [data, setData] = useState<{
		title: string;
		img?: string;
		id: string;
		createdAt: any;
		catSlug: string;
		desc: string;
		views: number;
		userEmail: string;
		slug: string;
		user: {
			id: string;
			name: string;
			email: string;
			image: string;
		};
	}>();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_URL}api/post/${params.id}`, {
			cache: "no-store",
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, [params.id]);
	return (
		<>
			{loading ? (
				<>
					<div className="font-[500] w-40 bg-slate-200 rounded h-8 m-8"></div>

					<div className="h-[100vh] justify-start flex m-8 flex-col gap-5  animate-pulse">
						<div className=" h-[300px] bg-slate-200 rounded"></div>
						<h1 className="font-anton capitalize text-3xl w-52 bg-slate-200 rounded h-5"></h1>
						<div className="flex justify-between items-start my-5 font-Noto sm:flex-row flex-col gap-3 ">
							<div className="flex flex-col gap-3">
								<div className="font-[500] w-40 bg-slate-200 rounded h-5"></div>
								<div className="font-[500] w-32 bg-slate-200 rounded h-5"></div>
							</div>

							<div className="flex gap-3 font-[500] justify-between">
								<div className="flex gap-3 flex-col">
									<div className="w-32 bg-slate-200 rounded h-5">
										<span className="capitalize"></span>
									</div>
									<div className="w-24 bg-slate-200 rounded h-5"></div>
								</div>
								<div>
									<div className="w-14  bg-slate-200 rounded-full h-14"></div>
								</div>
							</div>
						</div>

						<div className=" min-h-[300px] border-y-2 py-5  bg-slate-200 rounded ">
							<div className="font-Noto text-xl"></div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="flex m-8 flex-col gap-5">
						<div className="flex gap-3 font-anton">
							<Link href={"/"}>Main</Link>
							<div> {">"} </div>
							<Link href={"/post"}>Posts</Link>
							<div> {">"} </div>
							<Link className="capitalize" href={`/category?cat=${data?.catSlug}`}>{data?.catSlug}</Link>
							<div> {">"} </div>
							<div className="capitalize">{data?.title}</div>
						</div>
						<div className="relative w-[100%] h-[300px]">
							<Image
								src={
									data?.img ||
									"https://images.unsplash.com/photo-1519882189396-71f93cb4714b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								}
								alt=""
								fill
								className="object-cover"
							/>
						</div>
						<h1 className="font-anton capitalize text-3xl">{data?.title}</h1>
						<div className="flex justify-between items-start my-5 font-Noto sm:flex-row flex-col gap-3 ">
							<div className="flex flex-col gap-3">
								<div className="font-[500]">Day release: {data?.createdAt}</div>
								<div className="font-[500]">Views: {data?.views}</div>
							</div>

							<div className="flex gap-3 font-[500] justify-between">
								<div className="flex gap-3 flex-col">
									<div>
										Content: <span className="capitalize">{data?.catSlug}</span>
									</div>
									<div>Author: {data?.user.name}</div>
								</div>
								<div>
									<Link href={"/profile/" + data?.user.id}>
										<Image
											className="rounded-full"
											src={data?.user.image as string}
											alt=""
											width={50}
											height={50}
										/>
									</Link>
								</div>
							</div>
						</div>

						<div className=" min-h-[300px] border-y-2 py-5 ">
							<div className="font-Noto text-xl">
								{parse(data?.desc as string)}
							</div>
						</div>
						{data?.userEmail ? (
							<>
								<CommentSinglePost slug={data?.slug} />
								<WriteComment data={data} />
							</>
						) : (
							<>loading ...</>
						)}
					</div>
				</>
			)}
		</>
	);
}

export default SinglePost;
