"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
function Header() {
	const { data, status } = useSession();
	return (
		<>
			<div className="flex justify-between items-center p-8 w-[100%] h-[3vh] bg-white border-b-black border-[1px]">
				<Image
					src="/Cafe.png"
					alt="logo"
					className="rounded-full"
					width={50}
					height={50}
				/>
				<div className="flex flex-row gap-3 justify-between items-center">
					<Link href={"/login"}>Rooms</Link>
					<Link href={"/login"}>Movies</Link>
					<Link href={"/login"}>Foods</Link>
					<Link href={"/login"}>Blogs</Link>
					{status === "authenticated" ? (
						<div className="flex flex-row gap-3 justify-between items-center">
							<Link href={"/profile"}>
								<Image
									src={data?.user?.image as string}
									alt="img-user"
									className="rounded-full"
									width={50}
									height={50}
								/>
							</Link>
							{/* <div>{data?.user?.email}</div> */}
							<Link href={"/"} onClick={() => signOut()}>
								Logout
							</Link>
						</div>
					) : (
						<Link href={"/login"}>Login</Link>
					)}
				</div>
			</div>
		</>
	);
}

export default Header;
