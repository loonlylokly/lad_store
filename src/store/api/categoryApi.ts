import CategoryCardType from "@/types/CategoryCardType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (build) => ({
    fetchAllCategory: build.query<{categories: CategoryCardType[]}, string>({
      query: () => ({
        url: '/categories',
      })
    })
  })
})