// get user

import { BASE_URL, fetchWithAuth } from "../../utils.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { dispatch, getState }) => {
    const response = await fetchWithAuth(
      dispatch,
      getState,
      `${BASE_URL}/auth/profile`
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Unauthorized");
    }
    const data = await response.json();

    return data;
  }
);

// Login user

export const login = createAsyncThunk("user/login", async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  console.log("somethign happaens ");

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong !");
  }
  const data = await response.json();
  console.log("somethign happaens " + data);
  return data;
});

// export const getUser = createAsyncThunk(
//   "auth/getUser",
//   async (access_token) => {
//     const response = await fetch(`${BASE_URL}/auth/profile`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${access_token}`,
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to upadate user !");
//     }

//     const data = await response.json();
//     return data;
//   }
// );
// refresh token
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (refreshToken) => {
    const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    if (!response.ok) {
      throw new Error(errorData.message);
    }
    const data = await response.json();

    return data;
  }
);
