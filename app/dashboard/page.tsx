"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
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
function Dashboard() {
	const { data, isLoading } = useSWR(
		`${process.env.NEXT_PUBLIC_URL}api/post`,
		fetcher
	);
	const handleChange = (e: any, x: any) => {
		return (event: React.MouseEvent) => {
			// e.preventDefault();
			console.log(e);
			try {
				axios
					.post(`${process.env.NEXT_PUBLIC_URL}api/post/${e}`, {
						public: !x,
					})
					.then(function (response) {
						// handle success
						toast("Update !!! Please reload page to see update.");
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
						// handle error
						// setError(true);
						toast("Something wrong !!!");
					})
					.finally(function () {
						// always executed
					});
			} catch (error) {}
		};
	};
	const handleDelete = (e: any) => {
		return (event: React.MouseEvent) => {
			// e.preventDefault();
			console.log(e);
			try {
				axios
					.delete(`${process.env.NEXT_PUBLIC_URL}api/post/${e}`)
					.then(function (response) {
						// handle success
						toast("Deleted !!! Please reload page to see update.");
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
						// handle error
						// setError(true);
						toast("Something wrong !!!");
					})
					.finally(function () {
						// always executed
					});
			} catch (error) {}
		};
	};
	return (
		<div className="p-8 w-[100%] min-h-[100vh]  flex flex-col gap-5">
			<ToastContainer />
			<h1 className="text-3xl font-Croissant">Dashboard</h1>
			{isLoading ? (
				<>
					<div>loading</div>
				</>
			) : (
				<>
					<div>Total: {data.length}</div>
					{data?.map((e: any) => {
						return (
							<div key={e?.id}>
								<div className="flex flex-row gap-5 justify-between items-center p-2 rounded hover:bg-slate-300 h-[50px]">
									<Link href={`/post/${e?.id}`} className="hover:underline">
										{e?.title}
									</Link>
									<div className="flex gap-3 items-center">
										<div>Status: {e?.public ? " public " : " private"} </div>
										<button
											className="hover:underline text-green-300"
											onClick={handleChange(e?.id, e?.public)}
										>
											Change
										</button>
										<button
											className="hover:underline text-red-500"
											onClick={handleDelete(e?.id)}
										>
											Delete
										</button>
									</div>
								</div>
								<hr />
							</div>
						);
					})}
				</>
			)}
		</div>
	);
}

export default Dashboard;
