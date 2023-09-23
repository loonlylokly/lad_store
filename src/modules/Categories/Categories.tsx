import Link from "next/link";
import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <section>
      <h2 className={styles.title}>По категориям</h2>
      <div className={styles.categories}>
        <Link className={styles.clothes} href="/">
          <p className={`${styles.name} btn`}>Одежда</p>
        </Link>
        <Link className={styles.dishes} href="/">
          <p className={`${styles.name} btn`}>Посуда</p>
        </Link>
        <Link className={styles.souvenirs} href="/">
          <p className={`${styles.name} btn`}>Сувениры</p>
        </Link>
      </div>
    </section>
  )
}