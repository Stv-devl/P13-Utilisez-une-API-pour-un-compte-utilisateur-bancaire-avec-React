import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "../service/loginService";

/**
 * Async thunk for user login. Attempts to log the user with credentials.
 * If successful and rememberMe is true, the receved jwt token is encrypted and stored.
 * @param {string} username - The user's username.
 * @param {string} password - The user's password.
 * @param {boolean} rememberMe - To remember the checked user
 * @returns {Object} - The user token and rememberMe.
 */

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password, rememberMe }, { rejectWithValue }) => {
    try {
      const { token } = await loginService(username, password);
      if (rememberMe) {
        localStorage.setItem("Token", token);
      }
      return { token, rememberMe };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  token: null,
  remember: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      state.token = null;
      state.remember = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.remember = action.payload.rememberMe;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { userLogout } = authSlice.actions;

export default authSlice.reducer;
