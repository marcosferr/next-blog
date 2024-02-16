import Image from "next/image";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";

const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.URL} + '/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await res.json();
  return data;
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
