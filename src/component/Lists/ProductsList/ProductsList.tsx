"use client"

import ProductCard from "@/component/Cards/ProductCard/ProductCard";
import { productsApi } from "@/store/api/productsApi";
import { useAppSelector } from "@/store/store";

type Props = {
  classNameList: string
}

export default function ProductsList(props: Props) {
  const filter = useAppSelector(state => state.filterReducer.filter);
  const {data: products, isLoading} = productsApi.useFetchAllProductsQuery(filter);
  const list = products?.products;
  if (isLoading) {
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div className={props.classNameList}>
      {list?.length === 0 && <div>Товары не найдены</div> }
      {list && list.map((item) => {
        return <ProductCard key={item._id} card={item} />;
      })}
    </div>
  )
}