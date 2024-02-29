import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authSlice";

const store = configureStore({
  reducer: {
    auth: authenticationReducer,
  },
});

export default store;
