import ProductsList from "@/component/Lists/ProductsList/ProductsList";
import styles from "./Category.module.css";

export default async function Category() {

  return (
    <ProductsList classNameList={styles.products} />
  )
}
