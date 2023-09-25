"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
function Room() {
	const [selected, setSelected] = React.useState<Date>();

	let footer = <p>Please pick a day.</p>;
	if (selected) {
		footer = <p>You picked {format(selected, "PP")}.</p>;
	}
	return (
		<div className=" bg-red p-8 gap-5 flex flex-col">
			<div className="border-[1px] h-[200px]   flex flex-col sm:flex-row   justify-around items-start  sm:items-center border-black rounded-lg ">
				<div className="flex flex-col lg:flex-row gap-3 m-auto">
					<div>Kind Room:</div>
					<select
						name="kindRoom"
						id=""
						className="border-black rounded border-[1px]"
					>
						<option value="">Small room (2 people)</option>
						<option value="">medium rooms (4-6 people)</option>
						<option value="">big rooms (8-10 people)</option>
						<option value="">giant rooms (10-20 people)</option>
						<option value="">theater (20+ people)</option>
					</select>
				</div>
				<div className="flex flex-col lg:flex-row gap-3 m-auto">
					<div>Price:</div>
					<select
						name="price"
						id=""
						className="border-black rounded border-[1px]"
					>
						<option value="">0 - 20 USD</option>
						<option value="">20 - 50 USD</option>
						<option value="">50-100 USD</option>
						<option value="">100-150 USD</option>
						<option value="">up 150 USD</option>
					</select>
				</div>
			</div>
			<div className="flex md:justify-between flex-col-reverse md:flex-row justify-center md:items-start items-center gap-5">
				<div className="">
					<div className=" flex flex-row gap-10 flex-wrap justify-center md:justify-normal">
						<div>
							<div className="relative">
								<div className="absolute top-0 left-0">Small room</div>
								<div className="absolute bottom-0 left-0">Available</div>
								<div>
									<Image
										src={
											"https://images.unsplash.com/photo-1694920406731-a6cec2b02911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
										}
										className="bg-slate-400"
										alt=""
										width={200}
										height={250}
									/>
								</div>
							</div>
							<div>Room 112</div>
						</div>
						<div>
							<div className="relative">
								<div className="absolute top-0 left-0">Small room</div>
								<div className="absolute bottom-0 left-0">Available</div>
								<div>
									<Image
										src={
											"https://images.unsplash.com/photo-1694920406731-a6cec2b02911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
										}
										className="bg-slate-400"
										alt=""
										width={200}
										height={250}
									/>
								</div>
							</div>
							<div>Room 112</div>
						</div>
						<Link href={"/room/1"} className="text-white">
							<div className="relative">
								<div className="absolute top-2 left-2">Small room</div>
								<div className="absolute bottom-2 left-2">Available</div>
								<div className="absolute bottom-2 right-2">$20</div>
								<div>
									<Image
										src={
											"https://images.unsplash.com/photo-1694920406731-a6cec2b02911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
										}
										className="bg-slate-400 rounded-t"
										alt=""
										width={200}
										height={250}
									/>
								</div>
							</div>
							<div>Room 112</div>
						</Link>
						<Link href={"/room/1"} className="text-white">
							<div className="relative">
								<div className="absolute bottom-2 left-2">Available</div>
								<div className="absolute bottom-2 right-2">$100</div>
								<div>
									<Image
										src={
											"https://images.unsplash.com/photo-1694920406731-a6cec2b02911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
										}
										className="bg-slate-400 rounded-t"
										alt=""
										width={200}
										height={250}
									/>
								</div>
							</div>
							<div>Room 112</div>
						</Link>
						<Link href={"/room/1"} className="text-white">
							<div className="relative">
								<div className="absolute top-2 left-2">Small room</div>
								<div className="absolute bottom-2 left-2">Available</div>
								<div className="absolute bottom-2 right-2">$20</div>
								<div>
									<Image
										src={
											"https://images.unsplash.com/photo-1694920406731-a6cec2b02911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
										}
										className="bg-slate-400 rounded-t"
										alt=""
										width={200}
										height={250}
									/>
								</div>
							</div>
							<div>Room 112</div>
						</Link>
						<Link href={"/room/1"} className="text-white">
							<div className="relative">
								<div className="absolute top-2 left-2">Small room</div>
								<div className="absolute bottom-2 left-2">Available</div>
								<div className="absolute bottom-2 right-2">$20</div>
								<div>
									<Image
										src={
											"https://images.unsplash.com/photo-1694920406731-a6cec2b02911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
										}
										className="bg-slate-400 rounded-t"
										alt=""
										width={200}
										height={250}
									/>
								</div>
							</div>
							<div>Room 112</div>
						</Link>
						<Link href={"/room/1"} className="text-white">
							<div className="relative">
								<div className="absolute top-2 left-2">Small room</div>
								<div className="absolute bottom-2 left-2">Available</div>
								<div className="absolute bottom-2 right-2">$20</div>
								<div>
									<Image
										src={
											"https://images.unsplash.com/photo-1694920406731-a6cec2b02911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
										}
										className="bg-slate-400 rounded-t"
										alt=""
										width={200}
										height={250}
									/>
								</div>
							</div>
							<div>Room 112</div>
						</Link>
						<Link href={"/room/1"} className="text-white">
							<div className="relative">
								<div className="absolute top-2 left-2">Small room</div>
								<div className="absolute bottom-2 left-2">Available</div>
								<div className="absolute bottom-2 right-2">$20</div>
								<div>
									<Image
										src={
											"https://images.unsplash.com/photo-1694920406731-a6cec2b02911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
										}
										className="bg-slate-400 rounded-t"
										alt=""
										width={200}
										height={250}
									/>
								</div>
							</div>
							<div>Room 112</div>
						</Link>
						<Link href={"/room/1"} className="text-white">
							<div className="relative">
								<div className="absolute top-2 left-2">Small room</div>
								<div className="absolute bottom-2 left-2">Available</div>
								<div className="absolute bottom-2 right-2">$20</div>
								<div>
									<Image
										src={
											"https://images.unsplash.com/photo-1694920406731-a6cec2b02911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
										}
										className="bg-slate-400 rounded-t"
										alt=""
										width={200}
										height={250}
									/>
								</div>
							</div>
							<div>Room 112</div>
						</Link>
						<Link href={"/room/1"} className="text-white">
							<div className="relative">
								<div className="absolute top-2 left-2">Small room</div>
								<div className="absolute bottom-2 left-2">Available</div>
								<div className="absolute bottom-2 right-2">$20</div>
								<div>
									<Image
										src={
											"https://images.unsplash.com/photo-1694920406731-a6cec2b02911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
										}
										className="bg-slate-400 rounded-t"
										alt=""
										width={200}
										height={250}
									/>
								</div>
							</div>
							<div>Room 112</div>
						</Link>
					</div>
				</div>
				<div className="w-[300px] flex flex-col justify-start ">
					{/* <div className="flex flex-col lg:flex-row gap-3 m-auto"> */}
					<DayPicker
						mode="single"
						selected={selected}
						onSelect={setSelected}
						footer={footer}
					/>
					{/* </div> */}
				</div>
			</div>
		</div>
	);
}

export default Room;
