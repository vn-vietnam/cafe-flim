import Image from "next/image";
import Link from "next/link";
import React from "react";

function Food() {
	return (
		<div className="flex-col min-h-[86vh] flex justify-center gap-5 items-center">
			<Image src={"/update.svg"} alt="update" width={300} height={300} />
			<button className="text-xl bg-blue-500 py-3 px-5 text-white hover:bg-blue-600 rounded-full" >
				<Link href={"/"}>Main Page</Link>
			</button>
		</div>
	);
}

export default Food;
