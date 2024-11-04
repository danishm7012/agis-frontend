// src/slices/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const socialLinksSlice = createSlice({
  name: 'example',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  }, 
});

export const { increment, decrement } = socialLinksSlice.actions;
export default socialLinksSlice.reducer;