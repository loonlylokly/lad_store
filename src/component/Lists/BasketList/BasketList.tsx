"use client"

import BasketCard from "@/component/Cards/BasketCard/BasketCard";
import { useAppSelector } from "@/store/store";
import styles from "./BasketList.module.css";

export default function BasketList() {
  const productBasket = useAppSelector(state => state.basketReducer.productBasket);

  return (
    <div className={styles.basketList}>
      {productBasket?.length === 0 && <div>Корзина пуста</div> }
      {productBasket.map((item) => {
        return <BasketCard key={item._id} card={item}/>
      })}
    </div>
  )
}
