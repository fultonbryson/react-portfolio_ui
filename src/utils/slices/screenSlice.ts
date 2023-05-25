import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  displayType: "",
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setDisplayData: (state, action: PayloadAction<number>) => {
      action.payload >= 900
        ? (state.displayType = "DESKTOP")
        : (state.displayType = "MOBILE");
    },
  },
});

export const { setDisplayData } = screenSlice.actions;

export default screenSlice.reducer;
