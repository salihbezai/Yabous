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

// Login user

export const login = createAsyncThunk("user/login", async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong !");
  }
  const data = await response.json();
  console.log("logged in user is " + data);
  return data;
});

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

// get user profile

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (access_token) => {
    const response = await fetch(`${BASE_URL}/auth/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await response.json();
    return data;
  }
);

// get user

export const getUser = createAsyncThunk(
  "user/getUser",
  async (access_token) => {
    const response = await fetch(`${BASE_URL}/auth/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to upadate user !");
    }

    const data = await response.json();
    return data;
  }
);
// refresh token
export const refreshToken = createAsyncThunk(
  "user/refreshToken",
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
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
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
      body: JSON.stringify(email),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "something went wrong !");
    }

    const data = await response.json();

    return data;
  }
);
