"use client"

import Image from "next/image";
import styles from "./Hamburger.module.css";
import { menuSlice } from "@/store/reducer/MenuSlice";
import { useAppDispatch } from "@/store/hooks/redux";

export default function Hamburger ({width=36, height=36}) {
  const {toggle} = menuSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <button className={styles.hamburger} onClick={() => dispatch(toggle())}>
      <Image
        src="/icons/hamburger.svg"
        alt='Мобильное меню'
        width={width}
        height={height}
        loading = 'eager'
      />
    </button>
  );
}
