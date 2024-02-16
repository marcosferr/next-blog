import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const getData = async () => {
  const res = await fetch(`/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await res.json();
  return data;
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                width={32}
                height={32}
                alt="category image"
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
