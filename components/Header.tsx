"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { AlignLeft } from "lucide";

type Data = {
	user: {
		name: string;
		email: string;
		id: string;
		type: string;
		image: string;
	};
	session: {
		id: string;
	};
};

function Header() {
	const { data, status } = useSession();
	const [openList, setOpenList] = useState(false);
	return (
		<div className="relative">
			<div className="flex justify-between items-center p-8 w-[100%] h-[3vh] bg-white border-b-black border-[1px]">
				<Link href={"/"}>
					<Image
						priority
						src="/Cafe.png"
						alt="logo"
						className="rounded-full"
						width={50}
						height={50}
					/>
				</Link>
				<div className="relative w-7 h-7 block sm:hidden">
					<Image
						src={"/align-left.svg"}
						alt="left"
						fill
						onClick={() => setOpenList(!openList)}
					/>
				</div>

				<div className=" flex-row gap-3 justify-between items-center font-Noto font-[500] sm:flex hidden">
					<Link href={"/"}>Rooms</Link>
					<Link href={"/"}>Movies</Link>
					<Link href={"/"}>Foods</Link>
					<Link href={"/post"}>Blogs</Link>
					{status === "authenticated" ? (
						<div className="flex flex-row gap-3 justify-between items-center">
							{data?.user?.type === "admin" ? (
								<>
									<Link href={"/dashboard"}>Dashboard</Link>
								</>
							) : (
								<></>
							)}

							<Link href={"/writing"}>Writing</Link>
							<Link href={"/"} onClick={() => signOut()}>
								Logout
							</Link>
							<Link href={"/profile"}>
								<Image
									src={data?.user?.image as string}
									alt="img-user"
									className="rounded-full"
									width={50}
									height={50}
								/>
							</Link>
						</div>
					) : (
						<Link href={"/login"}>Login</Link>
					)}
				</div>
			</div>
			{openList ? (
				<>
					<div className=" h-[10vh]  w-[100%] px-8 flex flex-col items-center justify-center gap-3 border-b-[1px] border-black sm:hidden">
						<div className="flex flex-row gap-3 justify-around items-center font-Noto font-[500] w-[100%]">
							<Link href={"/"}>Rooms</Link>
							<Link href={"/"}>Movies</Link>
							<Link href={"/"}>Foods</Link>
							<Link href={"/post"}>Blogs</Link>
						</div>
						<div className="font-Noto font-[500]">
							{status === "authenticated" ? (
								<div className="flex flex-row gap-5 justify-between items-center w-[100%]">
									{data?.user?.type === "admin" ? (
										<>
											<Link href={"/dashboard"}>Dashboard</Link>
										</>
									) : (
										<></>
									)}

									<Link href={"/writing"}>Writing</Link>
									<Link href={"/"} onClick={() => signOut()}>
										Logout
									</Link>
									<Link href={"/profile"}>Profile</Link>
								</div>
							) : (
								<Link href={"/login"}>Login</Link>
							)}
						</div>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
}

export default Header;
