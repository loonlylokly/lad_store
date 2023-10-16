"use client"

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
        <a className={styles.clothes} href="/catalog" onClick={() => dispatch(changeCategory('clothes'))}>
          <p className={`${styles.name} btn`}>Одежда</p>
        </a>
        <a className={styles.dishes} href="/catalog" onClick={() => dispatch(changeCategory('dishes'))}>
          <p className={`${styles.name} btn`}>Посуда</p>
        </a>
        <a className={styles.souvenirs} href="/catalog" onClick={() => dispatch(changeCategory('souvenirs'))}>
          <p className={`${styles.name} btn`}>Сувениры</p>
        </a>
      </div>
    </section>
  )
}