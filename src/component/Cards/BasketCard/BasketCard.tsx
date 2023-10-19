/* eslint-disable @next/next/no-img-element */
import BasketCount from '@/component/Forms/BasketCount/BasketCount';
import BtnRemoveProduct from '@/component/Buttons/BtnRemoveProduct/BtnRemoveProduct';
import PriceProduct from '@/component/Price/PriceProduct';
import ProductCardType from '@/types/ProductCardType';
import styles from './BasketCard.module.css';

export default function BasketCard({ card }: { card: ProductCardType }) {
  return (
    <div className={styles.wrapper}>
      <a className={styles.card} href={`/product/${card.url}`}>
        <img src={card.thubnail_url} alt={card.name} width={70} height={70} />
        <div>
          <h2>{card.name}</h2>
          <p>{card.description}</p>
        </div>
      </a>
      <BtnRemoveProduct
        className={`btn btnSecondary ${styles.btnRemove}`}
        product={card}
        text={'X'}
      />
      <PriceProduct className={styles.price} card={card} />
      <BasketCount idCard={card._id} name={card.name} />
    </div>
  );
}
