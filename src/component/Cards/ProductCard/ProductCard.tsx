/* eslint-disable @next/next/no-img-element */
import ProductCardType from '@/types/ProductCardType';
import BtnAddProduct from '@/component/Buttons/BtnAddProduct/BtnAddProduct';
import styles from './ProductCard.module.css';

type Props = {
  card: ProductCardType;
};

export default function ProductCard({ card }: Props) {
  return (
    <div className={styles.card}>
      <a href={`/product/${card.url}`}>
        <img
          className={styles.image}
          src={card.thubnail_url}
          alt={card.name}
          width={130}
          height={130}
          loading="lazy"
        />
      </a>
      <a href={`/product/${card.url}`}>
        <p className={styles.name}>{card.name}</p>
      </a>
      <p className={styles.price}>{card.price}</p>
      <BtnAddProduct
        product={card}
        className={`${styles.button} btn btnSecondary`}
        text={'+'}
      />
    </div>
  );
}
