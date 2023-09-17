import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.NEXTAUTH_URL_GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.NEXTAUTH_URL_GOOGLE_CLIENT_SECRET as string,
		}),
	],
};

export const getAuthSession = () => getServerSession(authOptions);
