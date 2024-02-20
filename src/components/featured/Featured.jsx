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
          <Image
            src="/programador.jpg"
            alt="post"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Estas aprendiendo a programar?, necesitas ayuda?, estas en el lugar
            correcto
          </h2>
          <p className={styles.postDesc}>
            Este blog es un espacio lleno de recursos para tu camino en
            desarrollo. Aquí encontrarás tutoriales, tips, consejos y mucho más.
            Sientete libre de explorar y aprender.
          </p>
          <a className={styles.button} href="#recent">
            Leer mas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
