import { createAsyncThunk } from "@reduxjs/toolkit";

// filter products by title
export const filterProductsByTitle = createAsyncThunk(
  "fitlerProducts/filterProductsByTitle",
  async (title) => {
    const response = await fetch(`${BASE_URL}/products?title=${title}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.messag || "Failed to filter Products !");
    }
    const data = await response.json();
    return data;
  }
);

// filter products by price
export const filterProductsByPrice = createAsyncThunk(
  "fitlerProducts/filterProductsByPrice",
  async (price) => {
    const response = await fetch(`${BASE_URL}/products?price=${price}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.messag || "Failed to filter Products !");
    }
    const data = await response.json();
    return data;
  }
);

// filter products by range
export const filterProductsByRange = createAsyncThunk(
  "fitlerProducts/filterProductsByRange",
  async (price_min, price_max) => {
    const response = await fetch(
      `${BASE_URL}/products?price_min=${price_min}&price_max=${price_max}`
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.messag || "Failed to filter Products !");
    }
    const data = await response.json();
    return data;
  }
);

// filter products by category
export const filterProductsByCategory = createAsyncThunk(
  "fitlerProducts/filterProductsByCategory",
  async (categoryId) => {
    const response = await fetch(
      `${BASE_URL}/products?categoryId=${categoryId}`
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.messag || "Failed to filter Products !");
    }
    const data = await response.json();
    return data;
  }
);

// get products with combined filter
export const filterProducts = createAsyncThunk(
  "filterProducts/filterProducts",
  async ({ title, price_min, price_max, categoryId }) => {
    const params = new URLSearchParams();

    if (title) params.append("title", title);
    if (price_min !== undefined) params.append("price_min", price_min);
    if (price_max !== undefined) params.append("price_max", price_max);
    if (categoryId) params.append("categoryId", categoryId);

    const response = await fetch(`${BASE_URL}/products?${params.toString()}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to filter products!");
    }

    const data = await response.json();
    return data;
  }
);
