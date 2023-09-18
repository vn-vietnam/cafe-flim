import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
	const { searchParams } = new URL(req.url);
	const cat: any = searchParams.get("cat");

	try {
		if (searchParams.get("cat")) {
			const posts = await prisma.post.findMany({
				where: {
					catSlug: cat,
					public: true,
				},
			});
			return new NextResponse(JSON.stringify(posts), { status: 200 });
		} else {
			const posts = await prisma.post.findMany({
				where: {
					public: true,
				},
			});
			return new NextResponse(JSON.stringify(posts), { status: 200 });
		}
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }),
			{ status: 500 }
		);
	}
};

// CREATE A POST
export const POST = async (req: NextRequest) => {
	const session = await getAuthSession();

	if (!session) {
		return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
			status: 401,
		});
	}

	try {
		const body = await req.json();
		const post = await prisma.post.create({
			data: { ...body, userEmail: session?.user?.email },
		});

		return new NextResponse(JSON.stringify(post), { status: 200 });
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }),
			{ status: 500 }
		);
	}
};
