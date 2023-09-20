"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, {

	useState,
} from "react";
type IContents = {
	desc: string;
	userEmail: string;
	postSlug: string;
};
function WriteComment(data: any) {
	const router = useRouter();
	const [content, setContent] = useState<IContents>({
		desc: "",
		postSlug: data?.data?.slug,
		userEmail: data?.data?.userEmail,
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
				// handle success
				console.log(response);
				// router.push(`/post`);
				router.push(`/post/${data?.data?.id}`)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	};
	return (
		<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
				submit
			</button>
		</form>
	);
}

export default WriteComment;
