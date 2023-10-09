import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type filterPayload = {
  sort: string,
  availability: boolean,
  priceFrom: number,
  priceTo: number  
}

const defaultFilter = {
  sort: 'saleDecr',
  category: 'all',
  availability: true,
  priceFrom: 0,
  priceTo: 100000    
};

const filter = localStorage.getItem('filter') !== null ? 
                JSON.parse(localStorage.getItem('filter') || '') :defaultFilter;
                

const initialState = {
  isClose: true,
  filter: {
    sort: filter.sort,
    category: filter.category,
    availability: filter.availability,
    priceFrom: filter.priceFrom,
    priceTo: filter.priceTo    
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
      localStorage.setItem('filter', JSON.stringify(state.filter));
    }
  }
});

export default filterSlice.reducer;
