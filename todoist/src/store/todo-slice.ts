import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  value: string;
}

const initialState: TodoState = {
  value: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue } = todoSlice.actions;

export default todoSlice.reducer;
