import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../service/userService";
import editService from "../service/editService";

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

export const editUserName = createAsyncThunk(
  "user/editUserName",
  async ({ firstName, lastName, token }, { rejectWithValue }) => {
    try {
      const updatedUserData = await editService(firstName, lastName, token);
      return { updatedUserData };
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
    builder
      .addCase(userVerification.pending, (state) => {
        state.loading = true;
      })
      .addCase(userVerification.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.userData;
      })
      .addCase(userVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editUserName.fulfilled, (state, action) => {
        state.userData = action.payload.updatedUserData;
      });
  },
});

export default userSlice.reducer;
