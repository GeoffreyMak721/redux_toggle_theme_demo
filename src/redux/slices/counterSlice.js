import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 2,
  },
  reducers: {
    setCount: (state, action) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { setCount, increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
