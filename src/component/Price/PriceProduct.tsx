"use client"

import { useAppSelector } from "@/store/store";
import ProductCardType from "@/types/ProductCardType";

export default function PriceProduct({className, card}: {className: string, card: ProductCardType}) {
  const productCount = useAppSelector(state => state.basketReducer.productCount)

  return (
    <p className={className}>Цена: {card.price} x {productCount[card._id]} = {card.price * productCount[card._id]} RUB</p>
  )
}
