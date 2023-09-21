"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type IContents = {
	desc: string;
	userEmail: string;
	postSlug: string;
};
function WriteComment(dataUser: any) {
	// console.log(dataUser);
	const router = useRouter();
	const [content, setContent] = useState<IContents>({
		desc: "",
		postSlug: dataUser?.data?.slug,
		userEmail: dataUser?.data?.userEmail,
	});
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent((x) => {
			return {
				...x,
				[e.target.name]: e.target.value,
			};
		});
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		axios
			.post(`${process.env.NEXT_PUBLIC_URL}api/comment`, {
				...content,
			})
			.then(function (response) {
				toast("Comment successfully !!!");
				// handle success
				console.log(response);
				// router.push(`/post`);
				router.push(`/post/${dataUser?.data?.id}`);
				window.location.reload();
			})
			.catch(function (error) {
				// handle error
				toast("Please login to comment !");
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	};
	return (
		<>
			<ToastContainer />
			<form className="flex flex-col gap-5 font-Noto" onSubmit={handleSubmit}>
				<textarea
					name="desc"
					placeholder="Comment ..."
					className="border-[1px] w-[100%] h-[20vh] p-5"
					onChange={handleChange}
				/>
				<button
					className="w-[100px] h-[50px] border-[1px] border-black"
					type="submit"
				>
					Submit
				</button>
			</form>
		</>
	);
}

export default WriteComment;
