"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

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
				<div className="w-[100%] h-[70vh]">loading</div>
			) : (
				<>
					<div className="flex m-8 flex-col">
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
						<div className="flex justify-between items-start my-5">
							<div className="flex flex-col gap-3">
								<div>{data?.title}</div>
								<div>Day release: {data?.createdAt}</div>
								<div>Views: {data?.views}</div>
							</div>

							<div>
								<div>
									Content: <span className="">{data?.catSlug}</span>{" "}
								</div>
								<div>
									<Link href={"profile/" + data?.user.id}>
										Author: {data?.user.name}
									</Link>
									<Image
										className="rounded-full"
										src={data?.user.image as string}
										alt=""
										width={50}
										height={50}
									/>
								</div>
							</div>
						</div>

						<div className="min-h-[100vh]">
							<div>{parse(data?.desc as string)}</div>
							{/* {data?.desc} */}
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default SinglePost;
