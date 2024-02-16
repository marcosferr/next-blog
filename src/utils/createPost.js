import prisma from "./connect";

async function main() {
  async function createMultiplePosts() {
    const userEmail = "ferreiramarcosadrian@gmail.com";

    for (let i = 0; i < 10; i++) {
      const newPost = await prisma.post.create({
        data: {
          slug: `post-slug-${i}`,
          title: `Post Title ${i}`,
          desc: `Post Description ${i}`,
          catSlug: "fashion",
          userEmail: userEmail,
          // other fields as necessary
        },
      });

      console.log(`Created post with ID ${newPost.id}`);
    }
  }

  createMultiplePosts()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  console.log(newPost);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
