import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
export const GET = async (req, res) => {
  const POST_PER_PAGE = 2;
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: (page - 1) * POST_PER_PAGE,
    });
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
