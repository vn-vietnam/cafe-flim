"use client";
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";

const fetcher = async (url: any) => {
	const res = await fetch(url);

	const data = await res.json();

	if (!res.ok) {
		const error = new Error(data.message);
		throw error;
	}
	return data;
};

function UpdateSingle() {
	const editorRef = useRef<TinyMCEEditor | null>(null);
	const param = useParams();

	const { data, isLoading } = useSWR(
		`${process.env.NEXT_PUBLIC_URL}api/post/${param.id}`,
		fetcher
	);
	const router = useRouter();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			axios
				.post(`${process.env.NEXT_PUBLIC_URL}api/post/${param.id}`, {
					desc: editorRef.current?.getContent(),
				})
				.then(function (response) {
					// handle success

					toast("Update successfully ");
					// console.log(response);
					router.push("/post");
					console.log(response);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					toast("Something wrong !!!");
				})
				.finally(function () {
					// always executed
				});
		} catch (error) {}
		// console.log(editorRef.current?.getContent())
	};

	return (
		<>
			<ToastContainer />
			<form
				onSubmit={handleSubmit}
				className="w-[100%] p-8 min-h-[100vh] flex flex-col gap-5 font-Mooli"
			>
				<h1 className="text-3xl font-Croissant">Update post</h1>
				{isLoading ? (
					<>
						<div>loading</div>
					</>
				) : (
					<>
						<Editor
							apiKey={process.env.NEXT_PUBLIC_TINY_EDITER}
							onInit={(evt, editor) => (editorRef.current = editor)}
							initialValue={data.desc}
							init={{
								height: 700,
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
							update
						</button>
					</>
				)}
			</form>
		</>
	);
}

export default UpdateSingle;
