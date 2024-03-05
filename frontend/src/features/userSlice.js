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
      const getUserData = await editService(firstName, lastName, token);
      //for fix edit bug
      const updateUserData = getUserData.userData
        ? getUserData.userData
        : getUserData;
      return { updateUserData };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  userData: null,
  firstName: null,
  lastName: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "userDatas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userVerification.pending, (state) => {
        state.loading = true;
      })
      .addCase(userVerification.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.userData;
        state.firstName = action.payload.userData.firstName;
        state.lastName = action.payload.userData.lastName;
      })
      .addCase(userVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editUserName.fulfilled, (state, action) => {
        state.userData = action.payload.updateUserData;
        state.firstName = action.payload.updateUserData.firstName;
        state.lastName = action.payload.updateUserData.lastName;
      });
  },
});

export default userSlice.reducer;
