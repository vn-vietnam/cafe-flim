import Image from "next/image";
import React from "react";

function SingleRoom() {
	return (
		<div className=" p-8  m-auto border-x-2 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
			<div>
				<Image
					src={
						"https://images.unsplash.com/photo-1694392295383-75437a29ac91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
					}
					alt="img"
					width={400}
					height={100}
          objectFit="cover"
				/>
			</div>
			<div className="flex flex-col font-Noto gap-3 lg:text-xl  text-sm">
				<div className="text-3xl font-Croissant">kfljslkdfjskl</div>
				<div>Type: Small Room</div>
				<div>Price: $100</div>
				<div className="flex flex-row gap-5 items-center">
					<button className="rounded-full px-5 py-3 bg-blue-400 hover:bg-blue-700 text-white">Reserve</button>
					<div className="text-lg text-blue-500">Available</div>
				</div>
				<div className="w-[80%]">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, reiciendis?</div>
			</div>
		</div>
	);
}

export default SingleRoom;
