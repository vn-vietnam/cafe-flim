"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Inputs = {
	title: string;
	desc: string;
	slug: string;
	userEmail: string;
};
function Writing() {
	const editorRef = useRef<TinyMCEEditor | null>(null);
	const { data, status } = useSession();
	const router = useRouter();
	const [error, setError] = useState(false);
	const [file, setFile] = useState<File>();
	const [select, setSelect] = useState("news");
	const [inputs, setInputs] = useState<Inputs>({
		title: "",
		desc: "",
		slug: "",
		userEmail: "",
	});
	if (status === "loading") {
		return (
			<div className="w-[100%] h-[calc(100vh-20vh)] flex justify-center items-center">
				Loading...
			</div>
		);
	}

	if (status !== "authenticated") {
		router.push("/login");
	}

	const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const item = (target.files as FileList)[0];
		setFile(item);
	};
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setInputs((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = new FormData();
		data.append("file", file!);
		data.append(
			"upload_preset",
			process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
		);
		data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!);
		data.append("folder", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

		try {
			const response = await fetch(
				`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
				{
					method: "POST",
					body: data,
				}
			);
			const res = await response.json();
			// console.log(res.url);
			axios
				.post(`${process.env.NEXT_PUBLIC_URL}api/post`, {
					...inputs,
					img: res.url,
					catSlug: select,
					desc: editorRef.current?.getContent(),
				})
				.then(function (response) {
					// handle success
					setError(false);
					toast("Thanks for writing - We'll public the post after confirming.", );
					// console.log(response);
					router.push("/post");
				})
				.catch(function (error) {
					// handle error
					setError(true);

					toast("Something wrong !!!");

				})
				.finally(function () {
					// always executed
				});
		} catch (error) {
	
			setError(true);
			toast("Something wrong !!!");
		}
	};
	return (
		<>
			<ToastContainer />
			<form
				onSubmit={handleSubmit}
				className="w-[100%] p-8 min-h-[100vh] flex flex-col gap-5 font-Mooli"
			>
				<h1 className="text-3xl font-Croissant">Write a post</h1>
				<span>Title:</span>
				<input
					type="text"
					name="title"
					className="w-[100%] px-5 h-[100px] border-black border-[1x] bg-slate-100"
					onChange={handleChange}
					placeholder="Title"
				/>
				<span>Email:</span>
				<input
					type="text"
					name="userEmail"
					className="w-[100%] px-5 h-[100px] border-black border-[1x] bg-slate-100"
					onChange={handleChange}
					placeholder="Email"
				/>

				<span>Slug:</span>
				<input
					placeholder="Slug"
					type="text"
					name="slug"
					onChange={handleChange}
					className="w-[100%] px-5 h-[100px] border-black border-[1x] bg-slate-100"
				/>
				<span>Category:</span>
				<select
					id="category"
					name="category"
					onChange={(e) => setSelect(e.target.value)}
					className="w-[100%] px-5 h-[100px] border-black border-[1x]
				bg-slate-100"
				>
					<option value="news">News</option>
					<option value="blog">Blog</option>
					<option value="newspaper">Newspaper</option>
					<option value="hot-news">Hot News</option>
					<option value="story">Story</option>
				</select>

				<input type="file" name="img" onChange={handleChangeImg} />

				<Editor
					apiKey={process.env.NEXT_PUBLIC_TINY_EDITER}
					onInit={(evt, editor) => (editorRef.current = editor)}
					initialValue="<p>Description...</p>"
					init={{
						height: 500,
						menubar: false,
						plugins: [
							"advlist",
							"autolink",
							"lists",
							"link",
							"image",
							"charmap",
							"preview",
							"anchor",
							"searchreplace",
							"visualblocks",
							"code",
							"fullscreen",
							"insertdatetime",
							"media",
							"table",
							"code",
							"help",
							"wordcount",
						],
						toolbar:
							"undo redo | blocks | " +
							"bold italic forecolor | alignleft aligncenter " +
							"alignright alignjustify | bullist numlist outdent indent | " +
							"removeformat | help",
						content_style:
							"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
					}}
				/>
				<button
					type="submit"
				
					className="border-black  h-[50px] bg-slate-100 w-[100px] border-2"
				>
					Submit
				</button>
			</form>
		</>
	);
}

export default Writing;
