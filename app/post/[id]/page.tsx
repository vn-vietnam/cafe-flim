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
	const [dataPost, setDataPost] = useState<{
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
				setDataPost(data);
				setLoading(false);
			});
	}, [params.id]);

	function handleMoveTop() {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}
	return (
		<div className="relative">
			<div className="fixed bottom-[30px] right-[30px]" onClick={handleMoveTop}>
				<Image src={"/arrow-up-circle.svg"} alt="icon" width={50} height={50} />
			</div>
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
				<div id="top">
					<div className="flex m-8 flex-col gap-5 text-[16px]">
						<div className="flex gap-3 font-anton flex-wrap">
							<Link href={"/"}>Main</Link>
							<div> {">"} </div>
							<Link href={"/post"}>Posts</Link>
							<div> {">"} </div>
							<Link
								className="capitalize"
								href={`/category?cat=${dataPost?.catSlug}`}
							>
								{dataPost?.catSlug}
							</Link>
							<div> {">"} </div>
							<div className="capitalize">{dataPost?.title}</div>
						</div>
						<div className="relative w-[100%] h-[300px]">
							<Image
								src={
									dataPost?.img ||
									"https://images.unsplash.com/photo-1519882189396-71f93cb4714b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								}
								alt=""
								fill
								className="object-cover"
							/>
						</div>
						<h1 className="font-anton capitalize text-[20px]">
							{dataPost?.title}
						</h1>
						<div className="flex justify-between items-start text-[14px] my-5 font-Noto sm:flex-row flex-col gap-3 ">
							<div className="flex flex-col gap-3">
								<div className="font-[500]">
									Day release: {dataPost?.createdAt}
								</div>
								<div className="font-[500]">Views: {dataPost?.views}</div>
							</div>

							<div className="flex gap-3 font-[500] justify-between">
								<div className="flex gap-3 flex-col">
									<div>
										Content:{" "}
										<span className="capitalize">{dataPost?.catSlug}</span>
									</div>
									<div>Author: {dataPost?.user?.name}</div>
								</div>
								<div>
									<Link href={"/profile/" + dataPost?.user?.id}>
										<Image
											className="rounded-full"
											src={dataPost?.user?.image as string}
											alt=""
											width={50}
											height={50}
										/>
									</Link>
								</div>
							</div>
						</div>

						<div className=" min-h-[300px] border-y-2 py-5 ">
							<div className="font-Inclusive text-[1.125rem] leading-[2rem] font-[300] w-[100%] md:w-[60%] m-auto">
								{parse((dataPost?.desc as string) || "")}
							</div>
						</div>

						<CommentSinglePost slug={dataPost?.slug} />
						<WriteComment slug={dataPost?.slug} />
					</div>
				</div>
			)}
		</div>
	);
}

export default SinglePost;
