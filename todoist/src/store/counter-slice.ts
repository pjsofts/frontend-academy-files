import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  a: number;
  b: number;
  c: number;
}

const initialState: CounterState = {
  a: 10,
  b: 0,
  c: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementA: (state) => {
      state.a = state.a + 1;
    },
    incrementB: (state) => {
      state.b = state.b + 1;
    },
    incrementC: (state) => {
      state.c = state.c + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementA, incrementB, incrementC } = counterSlice.actions;

export default counterSlice.reducer;
