import Link from "next/link";
import styles from "./DesktopMenu.module.css";

export default function DesktopMenu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} href="/">Главная</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} href="/catalog">Каталог</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} href="/">Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}