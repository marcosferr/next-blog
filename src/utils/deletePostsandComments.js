import { PrismaClient } from "@prisma/client";

import prisma from "./connect";

async function main() {
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
}

export { main };
