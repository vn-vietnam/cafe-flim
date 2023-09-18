import Image from "next/image";
import Link from "next/link";
import React from "react";

function ListPosts({ data }: any) {
	return (
		<>
			{data?.map((e: any) => {
				return (
					<>
						<Link
							href={"/post/" + e?.id}
							className="flex flex-col justify-center items-start"
							id={e?.id}
						>
							<Image
								src={
									e?.img ||
									"https://images.unsplash.com/photo-1694159784642-490d23f645a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
								}
								alt="img"
								width={500}
								height={500}
								className="w-auto h-auto"
							/>
							<div className="text-[16px] font-semibold">{e?.title}</div>
							<div className="text-[16px]">Views: {e?.views}</div>
						</Link>
					</>
				);
			})}
		</>
	);
}

export default ListPosts;
