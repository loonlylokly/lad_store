import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducer/MenuSlice";
import filterReducer from "./reducer/FilterSlice";


const rootReducer = combineReducers({
  menuReducer,
  filterReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
