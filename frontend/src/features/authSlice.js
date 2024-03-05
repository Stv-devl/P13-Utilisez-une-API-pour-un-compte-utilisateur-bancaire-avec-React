import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "../service/loginService";
import encryptToken from "../auth/enCrypted";

const initialState = {
  user: null,
  token: null,
  remember: false,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password, rememberMe }, { rejectWithValue }) => {
    try {
      const { token } = await loginService(username, password);
      if (rememberMe) {
        encryptToken(rememberMe, token);
      }
      return { token, rememberMe };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

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
