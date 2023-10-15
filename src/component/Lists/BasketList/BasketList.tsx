"use client"

import BasketCard from "@/component/Cards/BasketCard/BasketCard";
import { useAppSelector } from "@/store/store";
import styles from "./BasketList.module.css";

export default function BasketList() {
  const productBasket = useAppSelector(state => state.basketReducer.productBasket);
  const productCount = useAppSelector(state => state.basketReducer.productCount);

  if (productBasket.length === 0) {
    return (
      <div>Корзина пуста</div>
    )
  }

  const totalPrice = 
  productBasket.reduce((res, item) => 
    res + item.price * productCount[item._id], 0);

  return (
    <>
      <div className={styles.basketList}>
        {productBasket.map((item) => {
          return <BasketCard key={item._id} card={item}/>
        })}
      </div>
      <p className={styles.totalPrice}>Итого: {totalPrice} RUB</p>
      <button className={`btn btnPrimary ${styles.button}`}>Оформить заказ</button>
    </>
  )
}
