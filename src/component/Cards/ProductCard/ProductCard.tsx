import Image from "next/image";
import Link from "next/link";
import ProductCardType from '@/types/ProductCardType';
import styles from "./ProductCard.module.css";

type Props = {
  card: ProductCardType;
}

export default function ProductCard({card}: Props) {
  return (
    <Link className={styles.card} href={`/product/${card.url}`}>
      <Image 
        className={styles.image}
        src={card.thubnail_url}
        alt={card.name}
        width={130}
        height={130}
        loading='lazy'
      />
      <p className={styles.name}>{card.name}</p>
      <p className={styles.price}>{card.price}</p>
      <button className={`${styles.buyBtn} btn btnSecondary`}>+</button>
    </Link>
  )
}