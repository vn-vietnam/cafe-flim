import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
// GET SINGLE POST
export const GET = async (
	req: NextRequest,
	{ params }: { params: { id: string } }
) => {
	const { id } = params;

	try {
		const post = await prisma.post.update({
			where: { id: id },
			data: { views: { increment: 1 } },
			include: { user: true },
		});

		return new NextResponse(JSON.stringify(post), { status: 200 });
		// JSON.stringify({ message: "True!" }), { status: 200 };
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }),
			{ status: 500 }
		);
	}
};

// UPDATE
export const POST = async (
	req: NextRequest,
	{ params }: { params: { id: string } }
) => {
	const { id } = params;
	const body = await req.json();
	try {
		const post = await prisma.post.update({
			where: { id: id },
			data: body,
		});

		return new NextResponse(JSON.stringify(post), { status: 200 });
		// JSON.stringify({ message: "True!" }), { status: 200 };
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }),
			{ status: 500 }
		);
	}
};
// DELETE
export const DELETE = async (
	req: NextRequest,
	{ params }: { params: { id: string } }
) => {
	const { id } = params;
	try {
		await prisma.post.delete({
			where: { id: id },
		});

		return new NextResponse(JSON.stringify({ message: "DElETE POST ! OK" }), {
			status: 200,
		});
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }),
			{ status: 500 }
		);
	}
};
