import { createSlice } from "@reduxjs/toolkit";

export const Count = createSlice({
  name: "counter",
  initialState: {
    value: [], // 👈 start with an empty array instead of 0
  },
  reducers: {
  ,
  },
});

export const { increment, decrement } = Count.actions;

export default Count.reducer;
