import styles from "./DesktopMenu.module.css";

export default function DesktopMenu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="/">Главная</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/catalog">Каталог</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/">Контакты</a>
        </li>
      </ul>
    </nav>
  )
}