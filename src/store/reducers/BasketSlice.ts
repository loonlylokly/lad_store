import ProductCardType from "@/types/ProductCardType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type State = {
  count: number,
  productBasket: ProductCardType[],
  productCount: Record<string, number>
}

let productBasket: ProductCardType[] = [];
let productCount: Record<string, number> = {};

if (typeof localStorage !== 'undefined') {
  productCount = localStorage.getItem('productCount') !== null ? 
                  JSON.parse(localStorage.getItem('productCount') || '') : productCount;
  productBasket = localStorage.getItem('productBasket') !== null ? 
                  JSON.parse(localStorage.getItem('productBasket') || '') : productBasket;
}

const initialState: State = {
  count: productBasket.length,
  productBasket: productBasket,
  productCount: productCount
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increase(state, action: PayloadAction<string>) {
      if (state.productCount[action.payload] !== undefined) {
        state.productCount[action.payload] = state.productCount[action.payload] + 1;
      } else {
        state.productCount[action.payload] = 1;
      }
      localStorage.setItem('productCount', JSON.stringify(state.productCount));
    },
    decrease(state, action: PayloadAction<string>) {
      if (state.productCount[action.payload] !== undefined) {
        state.productCount[action.payload] = state.productCount[action.payload] - 1;
      } else {
        state.productCount[action.payload] = 1;
      }
      localStorage.setItem('productCount', JSON.stringify(state.productCount));
    },
    addProduct(state, action: PayloadAction<ProductCardType>) {
      if (state.productCount[action.payload.url] !== undefined) {
        state.productCount[action.payload.url] = state.productCount[action.payload.url] + 1;
      } else {
        state.productCount[action.payload.url] = 1;
        state.productBasket.push(action.payload);
        state.count += 1;
      }
      localStorage.setItem('productCount', JSON.stringify(state.productCount));
      localStorage.setItem('productBasket', JSON.stringify(state.productBasket));
    },
    removeProduct(state, action: PayloadAction<string>) {
      delete state.productCount[action.payload]
      state.productBasket.splice(
        state.productBasket.findIndex(item => item.url === action.payload), 1);
      state.count -= 1;
      localStorage.setItem('productCount', JSON.stringify(state.productCount));
      localStorage.setItem('productBasket', JSON.stringify(state.productBasket));
    },
  }
})

export default basketSlice.reducer;