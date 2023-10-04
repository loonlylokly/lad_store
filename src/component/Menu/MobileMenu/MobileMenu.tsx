"use client"

import Link from "next/link";
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
            <Link className={styles.link} href="/" onClick={() => dispatch(toggle())}>Главная</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/catalog" onClick={() => dispatch(toggle())}>Каталог</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/" onClick={() => dispatch(toggle())}>Контакты</Link>
          </li>
        </ul>
      </nav>
      <Link className={`${styles.loginBtn} btn btnSecondary`} href="/">Войти</Link>
    </div>
  )
}