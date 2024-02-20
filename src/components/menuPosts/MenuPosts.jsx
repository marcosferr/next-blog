import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css";
import axios from "@/app/axios";

const getData = async () => {
  try {
    const response = await axios.get("posts?popular=true");

    return response.data.posts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const MenuPosts = async ({ withImage }) => {
  const data = await getData();

  return (
    <div className={styles.items}>
      {data?.map((item, index) => (
        <Link href="/" className={styles.item} key={item.id}>
          {withImage && (
            <div className={styles.imageContainer}>
              {item.img && (
                <Image src={item.img} alt="" fill className={styles.image} />
              )}
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              {item.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              {/* <span className={styles.username}>{item.user.name}</span> */}
              <span className={styles.date}>
                - {item.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
