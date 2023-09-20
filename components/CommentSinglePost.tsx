"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fetcher = async (url: any) => {
	const res = await fetch(url);

	const data = await res.json();

	if (!res.ok) {
		const error = new Error(data.message);
		throw error;
	}
	return data;
};

function CommentSinglePost(slug: any) {
	const { data, isLoading } = useSWR(
		`${process.env.NEXT_PUBLIC_URL}api/comment/${slug?.slug}`,
		fetcher
	);
	return (
		<div className="w-[100%]  flex flex-col gap-5">
			<h1>Comment</h1>
			{isLoading ? (
				<>
					<div className="flex justify-center items-center">Loading ...</div>
				</>
			) : (
				<>
					<div className="flex gap-5 flex-col">
						{data.map((e: any) => {
							return (
								<div key={e?.id}>
									<div className="flex">
										<Link
											href={"/post/" + e?.id}
											className="flex w-[200px] h-[150px] flex-col justify-start items-start gap-3 "
											id={e?.id}
										>
											<Image
												src={
													e?.user?.image ||
													"https://images.unsplash.com/photo-1694159784642-490d23f645a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
												}
												alt="img"
												width={100}
												height={100}
												className="rounded-full w-[80px] h-[80px] "
											/>
											<div className="text-[10px] font-semibold">
												{e?.userEmail}
											</div>
											<div className="text-[10px] font-semibold">
												{e?.createdAt}
											</div>
										</Link>
										<div className=" w-fit border-l-2 px-5">
											<div>{e?.desc}</div>
										</div>
									</div>
									<hr className="my-4" />
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}

export default CommentSinglePost;
