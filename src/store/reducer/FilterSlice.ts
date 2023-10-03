import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isClose: true,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggle(state) {
      state.isClose = !state.isClose;
    }
  }
});

export default filterSlice.reducer;
