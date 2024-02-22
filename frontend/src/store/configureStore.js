import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import { postLogin } from "../actions/login.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(postLogin());

export default store;
