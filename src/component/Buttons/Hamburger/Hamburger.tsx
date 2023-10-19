'use client';

import Image from 'next/image';
import { menuSlice } from '@/store/reducers/MenuSlice';
import { useAppDispatch } from '@/store/store';
import styles from './Hamburger.module.css';

export default function Hamburger({
  width = 36,
  height = 36,
}: {
  width?: number;
  height?: number;
}) {
  const { toggle } = menuSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <button className={styles.hamburger} onClick={() => dispatch(toggle())}>
      <Image
        src="/icons/hamburger.svg"
        alt="Мобильное меню"
        width={width}
        height={height}
        loading="eager"
      />
    </button>
  );
}
