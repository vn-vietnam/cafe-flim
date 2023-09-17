"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
function Header() {
	const { data, status } = useSession();
	return (
		<div>
			<div>{data?.user?.name}</div>
			{status === "authenticated" ? (
				<>
					<Image
						src={data?.user?.image as string}
						alt="img-user"
						width={100}
						height={100}
					/>
					<div>{data?.user?.email}</div>
					<Link href={"/"} onClick={() => signOut()}>
						Logout
					</Link>
				</>
			) : (
				<Link href={"/login"}>Login</Link>
			)}
		</div>
	);
}

export default Header;
