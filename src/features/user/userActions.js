import { BASE_URL } from "../../utils.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// get all users
export const getAllUsers = createAsyncThunk("user/getUsers", async () => {
  const response = await fetch(`${BASE_URL}/users/`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Failed to get All Users");
  }
  const data = await response.json();
  return data;
});

// create new user
export const signUp = createAsyncThunk(
  "user/signup",
  async (userData, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      console.log("the userdata email " + userData.email);
      const emailResultCheck = await dispatch(
        checkEmailAvailability(userData.email)
      );
      if (checkEmailAvailability.fulfilled.match(emailResultCheck)) {
        const isValideEmail = emailResultCheck.payload.isAvailable;
        if (!isValideEmail) {
          toast.error(`Email is already registred !`);
          return rejectWithValue("Email is already registred !");
        }
      }
    } catch (error) {
      return rejectWithValue("Something went wrong please try again");
    }
    const response = await fetch(`${BASE_URL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to sign up");
    }

    const data = await response.json();

    return data;
  }
);

// get single user

export const getSingleUser = createAsyncThunk("user/getUser", async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to get user !");
  }
  const data = await response.json();
  return data;
});

// update user

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (id, userData, token) => {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to upadate user !");
    }

    const data = await response.json();
    console.log("updated message");
    return data;
  }
);

export const checkEmailAvailability = createAsyncThunk(
  "user/checkEmail",
  async (email) => {
    const response = await fetch(`${BASE_URL}/users/is-available`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("check here " + JSON.stringify(errorData));
      throw new Error(errorData.message || "something went wrong !");
    }
    const data = await response.json();

    return data;
  }
);
