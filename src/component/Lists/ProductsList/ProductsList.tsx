"use client"

import ProductCard from "@/component/Cards/ProductCard/ProductCard";
import { productsApi } from "@/store/api/productsApi";

type Props = {
  classNameList: string
}

export default function ProductsList(props: Props) {
  const {data} = productsApi.useFetchAllProductsQuery('');
  const list = data?.products
  return (
    <div className={props.classNameList}>
      {list && list.map((item, index) => {
        if (item.categories.includes("clothes")){
          return <ProductCard key={item._id} card={item} />;
        }
        return <></>
      })}
    </div>
  )
}