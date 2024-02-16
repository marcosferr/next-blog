import prisma from "./connect";

async function main() {
  async function createMultipleComments() {
    const userEmail = "ferreiramarcosadrian@gmail.com";
    const postSlug = "post-slug-0"; // replace with actual post slug

    for (let i = 0; i < 10; i++) {
      const newComment = await prisma.comment.create({
        data: {
          desc: `Comment Description ${i}`,
          userEmail: userEmail,
          postSlug: postSlug,
        },
      });

      console.log(`Created comment with ID ${newComment.id}`);
    }
  }

  createMultipleComments()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
