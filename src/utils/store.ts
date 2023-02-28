import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./slices/screenSlice";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
