"use client"

import { useAppDispatch, useAppSelector } from "@/store/store";
import { menuSlice } from "@/store/reducers/MenuSlice";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  const {isClose} = useAppSelector(state => state.menuReducer);
  const {toggle} = menuSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className={`${styles.wrapper} ${isClose && styles.close}`}>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="/" onClick={() => dispatch(toggle())}>Главная</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/catalog" onClick={() => dispatch(toggle())}>Каталог</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/" onClick={() => dispatch(toggle())}>Контакты</a>
          </li>
        </ul>
      </nav>
      <a className={`${styles.loginBtn} btn btnSecondary`} href="/">Войти</a>
    </div>
  )
}