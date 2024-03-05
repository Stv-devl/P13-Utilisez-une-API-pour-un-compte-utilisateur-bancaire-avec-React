import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../service/userService";
import editService from "../service/editService";

/**
 * Async thunk for user verification. If the token of user is correct we fetch the user data,
 * @param {string} token - The authentication token for user verification.
 * @returns {Object} userData upon successful verification.
 */

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

/**
 * Async thunk for edit user names. If the token of user is correct we can update edit
 * @param {string} firstName - The user's new firstname.
 * @param {string} lastName - The user's new lastname.
 * @param {string} token - The jwt token for user identification.
 * @returns {Object} - A object with the updated names
 */
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
