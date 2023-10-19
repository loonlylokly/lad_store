'use client';

import { useAppDispatch } from '@/store/store';
import { basketSlice } from '@/store/reducers/BasketSlice';
import ProductCardType from '@/types/ProductCardType';

type Props = {
  product: ProductCardType;
  className: string;
  text: string;
};

export default function BtnAddProduct({ product, className, text }: Props) {
  const dispatch = useAppDispatch();
  const addProduct = basketSlice.actions.addProduct;

  return (
    <button
      className={className}
      aria-label="Добавить в корзину"
      onClick={() => dispatch(addProduct(product))}
    >
      {text}
    </button>
  );
}
