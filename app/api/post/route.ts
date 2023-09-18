import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
	const { searchParams } = new URL(req.url);
	const page: any = searchParams.get("page");
	const cat: any = searchParams.get("cat");

	const POST_PER_PAGE = 3;

	const query = {
		take: POST_PER_PAGE,
		skip: POST_PER_PAGE * (page - 1),
		where: {
			...(cat && { catSlug: cat }),
		},
	};
	try {
		if (searchParams.size === 0) {
			const posts = await prisma.post.findMany();
			return new NextResponse(JSON.stringify(posts), { status: 200 });
		} else if (searchParams.get("cat")) {
			const posts = await prisma.post.findMany({
				where: {
					catSlug: cat,
				},
			});
			return new NextResponse(JSON.stringify(posts), { status: 200 });
		} else {
			const [posts] = await prisma.$transaction([
				prisma.post.findMany(query),
				prisma.post.count({ where: query.where }),
			]);
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