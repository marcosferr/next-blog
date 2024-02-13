import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hola, Un aprendiz aquí!</b> Descubre recursos para tu camino en
        desarrollo web
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio non
            quae ipsum provident nulla error, ullam sapiente voluptates quo
            neque et molestias quia, in eaque unde impedit culpa ducimus porro.
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
