// async thunk for fetching products

import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils.js";

// get All Products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", //action type string
  async () => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.messag || "Failed to get Products !");
    }
    const data = await response.json();
    return data;
  }
);

// get Single Product

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get Products !");
    }

    const data = await response.json();
    return data;
  }
);
