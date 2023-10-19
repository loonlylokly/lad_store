import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isClose: true,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle(state) {
      state.isClose = !state.isClose;
    },
  },
});

export default menuSlice.reducer;
