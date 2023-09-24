import List from "@/component/Lists/List/List";
import ProductCardType from "@/types/ProductCardType";
import ProductCard from "@/component/Cards/ProductCard/ProductCard";
import styles from "./Category.module.css";

export default function Category() {
  const list = [
    {
      id: '1',
      image: '/images/product.png',
      name: 'Футболка1',
      price: '1001 р'
    },
    {
      id: '2',
      image: '/images/product.png',
      name: 'Футболка2',
      price: '1002 р'
    },
    {
      id: '3',
      image: '/images/product.png',
      name: 'Футболка3',
      price: '1003 р'
    },
    {
      id: '4',
      image: '/images/product.png',
      name: 'Футболка4',
      price: '1004 р'
    },
    {
      id: '5',
      image: '/images/product.png',
      name: 'Футболка5',
      price: '1005 р'
    },
    {
      id: '6',
      image: '/images/product.png',
      name: 'Футболка6',
      price: '1006 р'
    },
  ];

  return (
    <List
      classNameList={styles.products}
      items={list}
      renderItem={(card: ProductCardType) => (
        <ProductCard key={card.id} card={card} />
      )}
    />
  )
}
