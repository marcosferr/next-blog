import Link from "next/link";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.tutoriales}`}
      >
        Tutoriales
      </Link>
      <Link
        href="/blog?cat=travel"
        className={`${styles.categoryItem} ${styles.IA}`}
      >
        IA
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${styles.categoryItem} ${styles.recursos}`}
      >
        Recursos
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.categoryItem} ${styles.tecnologia}`}
      >
        Tecnologia
      </Link>
    </div>
  );
};

export default MenuCategories;
