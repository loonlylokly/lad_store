import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type filterPayload = {
  sort: string,
  availability: boolean,
  priceFrom: number,
  priceTo: number  
}

const initialState = {
  isClose: true,
  filter: {
    sort: 'saleDesc',
    category: 'all',
    availability: true,
    priceFrom: 0,
    priceTo: 100000    
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggle(state) {
      state.isClose = !state.isClose;
    },
    changeFilters(state, action: PayloadAction<filterPayload>) {
      state.filter.availability = action.payload.availability;
      state.filter.sort = action.payload.sort;
      state.filter.priceFrom = action.payload.priceFrom;
      state.filter.priceTo = action.payload.priceTo;
    }
  }
});

export default filterSlice.reducer;
