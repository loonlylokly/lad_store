"use client"

import Image from "next/image";
import styles from "./BtnFilter.module.css";
import { useAppDispatch } from "@/store/hooks/redux";
import { filterSlice } from "@/store/reducer/FilterSlice";

export default function BtnFilter() {
  const dispatch = useAppDispatch();
  const {toggle} = filterSlice.actions;
  
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
