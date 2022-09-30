import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    setCounter: (state, action) => {
      state.value = action.payload;
    },
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
  },
});

export const { setCounter, increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
