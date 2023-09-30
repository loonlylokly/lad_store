import Link from "next/link";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  return (
    <div className={styles.wrapper}>
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
      <Link className={`${styles.loginBtn} btn btnSecondary`} href="/">Войти</Link>
    </div>
  )
}