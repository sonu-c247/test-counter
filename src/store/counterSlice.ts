import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state): void => {
      state.count += 1;
    },
    decrementCounter: (state) => {
      state.count -= 1;
    },

  }
});

// Action creators are generated for each case reducer function
export const { decrementCounter, incrementCounter } = counterSlice.actions;

export default counterSlice.reducer;
