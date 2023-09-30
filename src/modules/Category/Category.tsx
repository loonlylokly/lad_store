import List from "@/component/Lists/List/List";
import ProductCardType from "@/types/ProductCardType";
import ProductCard from "@/component/Cards/ProductCard/ProductCard";
import styles from "./Category.module.css";
import { getAllProducts } from "@/libs/getAllProducts";
import ProductsList from "@/component/Lists/ProductsList/ProductsList";

export default async function Category() {
  const list: ProductCardType[] = await getAllProducts();

  return (
    <ProductsList classNameList={styles.products} list={list} />
  )
}
