'use client';

import Image from 'next/image';
import { useAppSelector } from '@/store/store';
import styles from './BtnBasket.module.css';

export default function BtnBasket() {
  const count = useAppSelector((state) => state.basketReducer.count);

  if (count === 0) {
    return <></>;
  }

  return (
    <a href="/basket" className={styles.button} aria-label="Корзина">
      <div className={styles.wrapper}>
        <Image src="/icons/basket.svg" alt="Корзина" width={32} height={32} />
        <span className={styles.number}>{count}</span>
      </div>
    </a>
  );
}
