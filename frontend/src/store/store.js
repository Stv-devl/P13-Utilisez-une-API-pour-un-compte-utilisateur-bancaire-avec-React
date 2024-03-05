import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authSlice";
import userDatasReducer from "../features/userSlice";

/**
 * Configures the Redux store with reducers for authentication and user data.
 * auth reducer manage authentication state, while 'userDatas' reducer manage user profile data.
 * @returns {Store} - The Redux store configured with the specified reducers.
 */

const store = configureStore({
  reducer: {
    auth: authenticationReducer,
    userDatas: userDatasReducer,
  },
});

export default store;
