import ProductCardType from "@/types/ProductCardType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

type FilterProps = {
  sort: string;
  priceFrom: number;
  priceTo: number;
  availability: boolean;
  category: string;
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<{products: ProductCardType[]}, FilterProps>({
      query: ({sort = 'saleDesc', availability = true, priceFrom = 0, priceTo = 100000, category = 'all'}) => ({
        url: '/products',
        params: {
          sort: sort,
          availability: availability,
          priceFrom: priceFrom,
          priceTo: priceTo,
          category: category
        }
      })
    })
  })
})