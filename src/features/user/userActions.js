import { BASE_URL } from "../../utils.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
export const signUp = createAsyncThunk("user/signup", async (userData) => {
  const response = await fetch(`${BASE_URL}/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify(userData),
    },
  });
  if (!response.ok) {
    const errorData = await response.json();
    console.log("is error ? " + errorData.message);
    throw new Error(errorData.message || "Failed to sign up");
  }

  const data = await response.json();
  return data;
});

// get single user

export const getSingleUser = createAsyncThunk("user/getUser", async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to get user");
  }
  const data = await response.json();
  return data;
});
