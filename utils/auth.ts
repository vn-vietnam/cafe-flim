import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./connect";
import { DefaultSession, User, getServerSession } from "next-auth";
declare module "next-auth" {
	interface User {
		type: string;
		name: string;
		email: string;
		img: string;
	}
	interface Session extends DefaultSession {
		user?: User;
	}
}
export const authOptions: any = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.NEXTAUTH_URL_GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.NEXTAUTH_URL_GOOGLE_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		session(user: User) {
			return user;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);
