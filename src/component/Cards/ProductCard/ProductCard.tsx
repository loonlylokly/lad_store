import Image from "next/image";
import ProductCardType from '@/types/ProductCardType';
import styles from "./ProductCard.module.css";

type Props = {
  card: ProductCardType;
}

export default function ProductCard({card}: Props) {
  return (
    <div className={styles.card}>
      <Image 
        className={styles.image}
        src={card.image}
        alt={card.name}
        width={130}
        height={130}
        loading='lazy'
      />
      <p className={styles.name}>{card.name}</p>
      <p className={styles.price}>{card.price}</p>
      <button className={`${styles.buyBtn} btn btnSecondary`}>+</button>
    </div>
  )
}