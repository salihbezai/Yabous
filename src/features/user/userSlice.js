import { createSlice } from "@reduxjs/toolkit";
import {
  checkEmailAvailability,
  getAllUsers,
  getSingleUser,
  getUserProfile,
  login,
  signUp,
  updateUser,
} from "./userActions";

const initialState = {
  user: null,
  users: [],
  isAuthenticated: false,
  isEmailValide: false,
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

    // login
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem(
          "access_token",
          JSON.stringify(action.payload.access_token)
        );
        localStorage.setItem(
          "refresh_token",
          JSON.stringify(action.payload.refresh_token)
        );
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload || action.error.message;
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
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

    // update user
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });

    // get user profile
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem(
          "access_token",
          JSON.stringify(action.payload.access_token)
        );
        localStorage.setItem(
          "refresh_token",
          JSON.stringify(action.payload.refresh_token)
        );
        state.isAuthenticated = true;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload || action.error.message;
      });

    // email availability
    builder
      .addCase(checkEmailAvailability.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkEmailAvailability.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(checkEmailAvailability.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default userSlice.reducer;
