"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function Login() {
	const router = useRouter();
	const { status } = useSession();


	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (status === "authenticated") {
		router.push("/");
	}
	return <div onClick={() => signIn("google")}>Sign in with Google</div>;
}

export default Login;
