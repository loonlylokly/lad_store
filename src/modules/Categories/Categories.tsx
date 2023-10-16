"use client"

import Link from "next/link";
import { filterSlice } from "@/store/reducers/FilterSlice";
import { useAppDispatch } from "@/store/store";
import styles from "./Categories.module.css";

export default function Categories() {
  const dispatch = useAppDispatch();
  const changeCategory = filterSlice.actions.changeCategory;
  
  return (
    <section>
      <h2 className={styles.title}>По категориям</h2>
      <div className={styles.categories}>
        <Link className={styles.clothes} href="/catalog" onClick={() => dispatch(changeCategory('clothes'))}>
          <p className={`${styles.name} btn`}>Одежда</p>
        </Link>
        <Link className={styles.dishes} href="/catalog" onClick={() => dispatch(changeCategory('dishes'))}>
          <p className={`${styles.name} btn`}>Посуда</p>
        </Link>
        <Link className={styles.souvenirs} href="/catalog" onClick={() => dispatch(changeCategory('souvenirs'))}>
          <p className={`${styles.name} btn`}>Сувениры</p>
        </Link>
      </div>
    </section>
  )
}