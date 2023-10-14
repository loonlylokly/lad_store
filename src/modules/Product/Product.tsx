import ProductCardType from "@/types/ProductCardType";
import ProductSlider from "@/component/Lists/ProductSlider/ProductSlider";
import styles from "./Product.module.css";

export default function Product({data}: {data: ProductCardType}) {
  return (
    <section className={styles.product}>
      <ProductSlider images={data.images_urls} name={data.name}/>
      <h1 className={styles.name}>{data.name}</h1>
      <p className={styles.price}>{data.price} RUB</p>
      <button className={`btn btnPrimary ${styles.button}`}>В корзину</button>
      <p className={styles.description}>{data.description}</p>
    </section>
  )
}
