// async thunk for fetching products

import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils.js";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", //action type string
  async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
  }
);
