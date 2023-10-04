import ProductCardType from "@/types/ProductCardType";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {BaseQueryFn, EndpointDefinitions, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<{products: ProductCardType[]}, string>({
      query: () => ({
        url: '/products'
      })
    })
  })
})