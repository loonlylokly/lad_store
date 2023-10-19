'use client';

import ProductCard from '@/component/Cards/ProductCard/ProductCard';
import { productsApi } from '@/store/api/productsApi';
import { useSearchParams } from 'next/navigation';

type Props = {
  classNameList: string;
};

export default function ProductsList(props: Props) {
  const filter = {
    category: '',
    sort: '',
    availability: '',
    priceFrom: '',
    priceTo: '',
  };
  const searchParams = useSearchParams();
  let key: keyof typeof filter;
  for (key in filter) {
    filter[key] = searchParams.get(key) || '';
  }
  const { data: products, isLoading } =
    productsApi.useFetchAllProductsQuery(filter);
  const list = products?.products;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={props.classNameList}>
      {list?.length === 0 && <div>Товары не найдены</div>}
      {list &&
        list.map((item) => {
          return <ProductCard key={item._id} card={item} />;
        })}
    </div>
  );
}
