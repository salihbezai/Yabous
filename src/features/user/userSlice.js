import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getSingleUser, signUp } from "./userActions";

const initialState = {
  user: null,
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // signup
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log(state.user);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload || action.error.message;
      });

    // getAllUsers
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        console.log("all the users " + state.users);
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });

    // getUser
    builder
      .addCase(getSingleUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default userSlice.reducer;
