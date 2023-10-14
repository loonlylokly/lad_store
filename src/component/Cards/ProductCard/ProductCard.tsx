import Image from "next/image";
import Link from "next/link";
import ProductCardType from '@/types/ProductCardType';
import styles from "./ProductCard.module.css";
import BtnAddProduct from "@/component/Buttons/BtnAddProduct/BtnAddProduct";

type Props = {
  card: ProductCardType;
}

export default function ProductCard({card}: Props) {
  return (
    <div className={styles.card}>
      <Link href={`/product/${card.url}`}>
        <Image 
          className={styles.image}
          src={card.thubnail_url}
          alt={card.name}
          width={130}
          height={130}
          loading='lazy'
        />
      </Link>
      <Link href={`/product/${card.url}`}>
        <p className={styles.name}>{card.name}</p>
      </Link>
      <p className={styles.price}>{card.price}</p>
      <BtnAddProduct product={card}/>
    </div>
  )
}