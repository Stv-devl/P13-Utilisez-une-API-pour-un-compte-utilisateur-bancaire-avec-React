import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../service/userService";

export const userVerification = createAsyncThunk(
  "auth/userVerification",
  async (token, { rejectWithValue }) => {
    try {
      const { userData } = await userService(token);
      return { userData };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "userDatas",
  initialState: { userData: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userVerification.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userVerification.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload.userData;
    });
    builder.addCase(userVerification.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
