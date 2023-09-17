"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
function Login() {
	const router = useRouter();
	const { status } = useSession();

	if (status === "loading") {
		return (
			<div className="w-[100%] h-[calc(100vh-20vh)] flex justify-center items-center">
				Loading...
			</div>
		);
	}

	if (status === "authenticated") {
		router.push("/");
	}
	return (
		<div className="w-[100%] h-[calc(100vh-20vh)] flex justify-center items-center ">
			<div className="border-black border-[1px] flex justify-center items-center gap-2 p-3 hover:cursor-pointer">
				<Image src="/gg.svg" alt="google-icon" width={30} height={30} />
				<div onClick={() => signIn("google")}>Sign in with Google</div>
			</div>
		</div>
	);
}

export default Login;
