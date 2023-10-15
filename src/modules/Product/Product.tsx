import ProductCardType from "@/types/ProductCardType";
import ProductSlider from "@/component/Lists/ProductSlider/ProductSlider";
import styles from "./Product.module.css";
import BtnAddProduct from "@/component/Buttons/BtnAddProduct/BtnAddProduct";

export default function Product({data}: {data: ProductCardType}) {
  return (
    <section className={styles.product}>
      <ProductSlider images={data.images_urls} name={data.name}/>
      <h1 className={styles.name}>{data.name}</h1>
      <p className={styles.price}>{data.price} RUB</p>
      <BtnAddProduct product={data} className={`btn btnPrimary ${styles.button}`} text={"В корзину"}/>
      <p className={styles.description}>{data.description}</p>
    </section>
  )
}
