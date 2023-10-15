import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import menuReducer from "./reducers/MenuSlice";
import filterReducer from "./reducers/FilterSlice";
import basketReducer from "./reducers/BasketSlice";
import { productsApi } from "./api/productsApi";
import { categoryApi } from "./api/categoryApi";


const rootReducer = combineReducers({
  menuReducer,
  filterReducer,
  basketReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
                                          .concat(productsApi.middleware)
                                          .concat(categoryApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
