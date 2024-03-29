import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
        <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
      </div>
      <div className={styles.logo}>Aprendiz</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Inicio
        </Link>
        <Link href="/" className={styles.link}>
          Contacto
        </Link>
        <Link href="/" className={styles.link}>
          Acerca
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
