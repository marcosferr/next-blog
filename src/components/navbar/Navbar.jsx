import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="facebook.svg" alt="Facebook" width={24} height={24} />
        <Image src="instagram.svg" alt="Instagram" width={24} height={24} />
        <Image src="youtube.svg" alt="Youtube" width={24} height={24} />
        <Image src="linkedin.svg" alt="Linkedin" width={24} height={24} />
      </div>
      <div className={styles.logo}>Aprendiz</div>
      <div className={styles.links}>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
