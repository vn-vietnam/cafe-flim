import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./main.css";
export const metadata: Metadata = {
	title: "Cafe Film",
	description:
		"Cafe Film brings you a unique and exclusive movie-watching experience with your loved ones? Look no further! Our service offers the perfect solution by providing you with a private room to watch movies with your friends and family.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<AuthProvider>
				<head>
					<link rel="icon" href="/cafe-logo.png" />
				</head>
				<body className="container-bg">
					<Header />
					{children}
					<Footer />
				</body>
			</AuthProvider>
		</html>
	);
}
