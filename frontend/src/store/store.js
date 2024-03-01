import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authSlice";
import userDatasReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    auth: authenticationReducer,
    userDatas: userDatasReducer,
  },
});

export default store;
