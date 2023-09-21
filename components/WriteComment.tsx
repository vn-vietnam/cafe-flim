"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WriteComment(slug: any) {
	const { data, status } = useSession();
	const [desc, setDesc] = useState("");
	// console.log(desc);
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const dataComment = {
			desc: desc,
			userEmail: data?.user?.email,
			postSlug: slug?.slug,
		};
		// console.log(dataComment);
		axios
			.post(`${process.env.NEXT_PUBLIC_URL}api/comment`, dataComment)
			.then(function (response) {
				toast("Comment successfully !!!");
				// handle success
				console.log(response);
				// router.push(`/post`);
				router.push(`/post/${data?.user?.id}`);
				window.location.reload();
			})
			.catch(function (error) {
				// handle error
				toast("Something wrong !");
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	};
	return (
		<>
			<ToastContainer />
			{data !== undefined ? (
				<>
					<form
						className="flex flex-col gap-5 font-Noto"
						onSubmit={handleSubmit}
					>
						<textarea
							name="desc"
							placeholder="Comment ..."
							className="border-[1px] w-[100%] h-[20vh] p-5"
							onChange={(e) => setDesc(e.target.value)}
						/>
						<button
							className="w-[100px] h-[50px] border-[1px] border-black"
							type="submit"
						>
							Submit
						</button>
					</form>
				</>
			) : (
				<>loading...</>
			)}
		</>
	);
}

export default WriteComment;
