"use client"

import { useAppDispatch } from "@/store/store";
import { basketSlice } from "@/store/reducers/BasketSlice";
import ProductCardType from "@/types/ProductCardType";
import styles from "./BtnAddProduct.module.css";

type Props = {
  product: ProductCardType;
}

export default function BtnAddProduct({product}: Props) {
  const dispatch = useAppDispatch();
  const addProduct = basketSlice.actions.addProduct;

  return (
    <button className={`${styles.button} btn btnSecondary`}
            aria-label="Добавить в корзину"
            onClick={() => dispatch(addProduct(product))}>+</button>
  )
}
