"use client";
import Image from "next/image";
import styles from "./comments.module.css";
import Link from "next/link";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "@/app/axios";

const getData = async (slug) => {
  try {
    const response = await axios.get(`comments/?postSlug=${slug}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const [data, setData] = useState([]);

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    setDesc("");
    try {
      await axios.post("comments", { desc, postSlug });
      const response = await axios.get(`comments/?postSlug=${postSlug}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getData(postSlug);

      setData(fetchedData);
    }
    fetchData();
  }, [postSlug]);

  if (!data) return <div>Loading...</div>;

  if (data.length === 0) return <div>No comments yet</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login"> Login to leave a comment </Link>
      )}

      <div className={styles.comments}>
        {data &&
          data?.map((item) => (
            <div className={styles.comment} key={item._id}>
              <div className={styles.user}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>
                    {item.createdAt.substring(0, 10)}
                  </span>
                </div>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
