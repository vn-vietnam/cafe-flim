"use client";
import React from "react";
import Image from "next/image";
import useFetch from "@/components/useFetch";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";
function VideoMovies(dataType: any) {
	// console.log(dataType?.dataType);
	const { data, loading } = useFetch(
		`/movie/${dataType?.dataType?.id}/${dataType?.dataType?.endPoint}?api_key=${process.env.NEXT_PUBLIC_KEY_TMDB}`,
		""
	);
	// console.log(data);
	// id key name published_at
	return (
		<div className="p-8 w-[100%] flex flex-row gap-5 flex-wrap">
			{loading ? (
				<>
					<h1>hello</h1>
				</>
			) : (
				<>
					{data?.results &&
						data?.results?.map((e: any) => (
							<div key={e?.id}>
								<div>
									<ReactPlayer
										controls
										width="100%"
										height="100%"
										url={`https://www.youtube.com/watch?v=${e?.key}`}
									/>
									{/* <Image
										alt="video"
										width={300}
										height={200}
										className="rounded"
										src={`https://img.youtube.com/vi/${e?.key}/mqdefault.jpg`}
									/> */}
								</div>
								<div className="w-[200px] my-2 text-[14px] font-Noto">
									{e?.name}
								</div>
								{/* <div>{e?.published_at}</div> */}
							</div>
						))}
				</>
			)}
		</div>
	);
}

export default VideoMovies;
