"use client"

import Image from "next/image";
import { filterSlice } from "@/store/reducers/FilterSlice";
import { useAppDispatch } from "@/store/store";
import styles from "./BtnFilter.module.css";

export default function BtnFilter() {
  const dispatch = useAppDispatch();
  const toggle = filterSlice.actions.toggle;
  
  return (
    <button className={styles.filterBtn} onClick={() => dispatch(toggle())}>
      <Image
        className={styles.icon}
        src="/icons/filters.svg"
        alt="filters"
        width={16}
        height={16}
      />
      Фильтр
    </button>
  )
}
