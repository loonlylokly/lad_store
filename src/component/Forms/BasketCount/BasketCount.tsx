'use client';

import { basketSlice } from '@/store/reducers/BasketSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import styles from './BasketCount.module.css';

export default function BasketCount({
  idCard,
  name,
}: {
  idCard: string;
  name: string;
}) {
  const count = useAppSelector((state) => state.basketReducer.productCount);
  const dispatch = useAppDispatch();
  const increase = basketSlice.actions.increase;
  const decrease = basketSlice.actions.decrease;
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.buttonMinus}
        onClick={() => dispatch(decrease(idCard))}
        aria-label={`Уменьшить количество товара ${name}`}
      >
        -
      </button>
      <p className={styles.count}>{count[idCard]}</p>
      <button
        className={styles.buttonPlus}
        onClick={() => dispatch(increase(idCard))}
        aria-label={`Увеличить количество товара ${name}`}
      >
        +
      </button>
    </div>
  );
}
