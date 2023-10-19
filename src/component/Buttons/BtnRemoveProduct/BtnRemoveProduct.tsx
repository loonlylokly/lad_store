'use client';

import { useAppDispatch } from '@/store/store';
import { basketSlice } from '@/store/reducers/BasketSlice';
import ProductCardType from '@/types/ProductCardType';

type Props = {
  product: ProductCardType;
  className: string;
  text: string;
};

export default function BtnRemoveProduct({ product, className, text }: Props) {
  const dispatch = useAppDispatch();
  const removeProduct = basketSlice.actions.removeProduct;

  return (
    <button
      className={className}
      aria-label="Добавить в корзину"
      onClick={() => dispatch(removeProduct(product._id))}
    >
      {text}
    </button>
  );
}
