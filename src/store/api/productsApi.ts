import ProductCardType from "@/types/ProductCardType";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {BaseQueryFn, EndpointDefinitions, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

type FilterProps = {
  sort: string;
  priceFrom: number;
  priceTo: number;
  availability: boolean;
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<{products: ProductCardType[]}, FilterProps>({
      query: ({sort = 'saleDesc', availability = true, priceFrom = 0, priceTo = 100000}) => ({
        url: '/products',
        params: {
          sort: sort,
          availability: availability,
          priceFrom: priceFrom,
          priceTo: priceTo,
        }
      })
    })
  })
})