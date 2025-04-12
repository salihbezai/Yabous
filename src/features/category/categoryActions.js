import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_CATEGORY } from "../../utils";

// Helper to handle errors and convert to JSON
const fetchWithErrorHandling = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }
  return response.json();
};

export const getCategories = createAsyncThunk(
  "categories/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchWithErrorHandling(API_BASE_CATEGORY);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategoryById = createAsyncThunk(
  "categories/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchWithErrorHandling(`${API_BASE_CATEGORY}/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategoryBySlug = createAsyncThunk(
  "categories/fetchBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const data = await fetchWithErrorHandling(
        `${API_BASE_CATEGORY}/slug/${slug}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createCategory = createAsyncThunk(
  "categories/create",
  async (categoryData, { rejectWithValue }) => {
    try {
      const data = await fetchWithErrorHandling(API_BASE_CATEGORY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "categories/update",
  async ({ id, categoryData }, { rejectWithValue }) => {
    try {
      const data = await fetchWithErrorHandling(`${API_BASE_CATEGORY}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchWithErrorHandling(`${API_BASE_CATEGORY}/${id}`, {
        method: "DELETE",
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "categories/fetchProducts",
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchWithErrorHandling(
        `${API_BASE_CATEGORY}/${id}/products`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
