/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import BasketCount from "@/component/Forms/BasketCount/BasketCount";
import Link from "next/link";
import ProductCardType from "@/types/ProductCardType";
import styles from "./BasketCard.module.css";

export default function BasketCard({card}: {card: ProductCardType}) {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.card} href={`/product/${card.url}`}>
        <img 
          src={card.thubnail_url}
          alt={card.name}
          width={70}
          height={70}
        />
        <div>
          <h2>{card.name}</h2>
          <p>{card.description}</p>
        </div>
      </Link>
      <BasketCount url={card.url} name={card.name}/>
    </div>
  )
}
