import Image from "next/image";
import React from "react";

function Footer() {
	return (
		<div className="w-[100%] h-[13vh] p-8 bg-white border-y-black border-[1px] flex justify-between items-center">
			<div className="flex justify-center items-center gap-3">
				<Image
					src="/Cafe.png"
					alt="logo"
					className="rounded-full"
					width={40}
					height={40}
				/>
				<div className="text-sm text-center mt-2 ">Cafe Film</div>
			</div>
			<div>Create by NTK</div>
		</div>
	);
}

export default Footer;
