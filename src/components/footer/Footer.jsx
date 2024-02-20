import Image from "next/image";
import styles from "./footer.module.css";
import { startTransition } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}> Aprendiz Blog </h1>
        </div>
        <p className={styles.desc}>
          Puedes enterarte de las últimas noticias, tendencias en programación,
          y tecnologias siguiendo nuestras redes sociales
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="instagram" width={18} height={18} />
          <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Inicio</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Acerca</Link>
          <Link href="/">Contacto</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Tutoriales</Link>
          <Link href="/">Inteligencia Artificial</Link>
          <Link href="/">Recursos</Link>
          <Link href="/">Tecnologia</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
