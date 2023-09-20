import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL COMMENTS
export const GET = async (req: NextRequest) => {
	const { searchParams } = new URL(req.url);
	// const cat = searchParams.get("blog");

	try {
		const posts = await prisma.comment.findMany({
			// where: {
			// 	User: {
			// 		hasAdmin: true,
			// 	},
			// },
			// include: {
			// 	Category: {
			// 		select: {
			// 			nameCate: true,
			// 		},
			// 	},
			// 	User: {
			// 		select: {
			// 			name: true,
			// 		},
			// 	},
			// 	Type: {
			// 		select: {
			// 			name: true,
			// 		},
			// 	},
			// },
		});
		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }),
			{ status: 500 }
		);
	}
};

// CREATE A COMMENT
export const POST = async (req: NextRequest) => {
	const session = await getAuthSession();

	if (!session) {
		return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
			status: 401,
		});
	}

	try {
		const body = await req.json();
		const comment = await prisma.comment.create({
			data: { ...body },
		});

		return new NextResponse(JSON.stringify(comment), { status: 200 });
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }),
			{ status: 500 }
		);
	}
};
