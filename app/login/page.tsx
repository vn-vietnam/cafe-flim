"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

	const popupCenter = (url: any, title: string) => {
		const dualScreenLeft = window.screenLeft ?? window.screenX;
		const dualScreenTop = window.screenTop ?? window.screenY;

		const width =
			window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

		const height =
			window.innerHeight ??
			document.documentElement.clientHeight ??
			screen.height;

		const systemZoom = width / window.screen.availWidth;

		const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
		const top = (height - 550) / 2 / systemZoom + dualScreenTop;

		const newWindow = window.open(
			url,
			title,
			`width=${500 / systemZoom},height=${
				550 / systemZoom
			},top=${top},left=${left}`
		);

		newWindow?.focus();
	};

	function handleLogin() {
		popupCenter("/google-signin", " Sign In");
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}

	return (
		<div className="w-[100%] h-[calc(100vh-20vh)] flex justify-center items-center ">
			<div className="border-black border-[1px] flex justify-center items-center gap-2 p-3 hover:cursor-pointer">
				<Image src="/gg.svg" alt="google-icon" width={30} height={30} />
				<div onClick={handleLogin}>Sign in with Google</div>
			</div>
		</div>
	);
}

export default Login;
