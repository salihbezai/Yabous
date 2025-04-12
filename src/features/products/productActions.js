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

export const getSingleProductById = createAsyncThunk(
  "products/getSingleProductById",
  async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get Product!");
    }

    const data = await response.json();
    return data;
  }
);

// get product by slug
export const getSingleProductBySlug = createAsyncThunk(
  "products/getSingleProductBySlug",
  async (slug) => {
    const response = await fetch(`${BASE_URL}/products/${slug}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get Product !");
    }

    const data = await response.json();
    return data;
  }
);

// create product
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData) => {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create Product !");
    }

    const data = await response.json();
    return data;
  }
);

// update product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (id, productData) => {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update Product !");
    }

    const data = await response.json();
    return data;
  }
);

// delete product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, productData) => {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete Product !");
    }

    const data = await response.json();
    return data;
  }
);

// get products with Pagination
export const getProductsWithPagination = createAsyncThunk(
  "products/getProductsWithPagination",
  async (offset, limit) => {
    const response = await fetch(
      `${BASE_URL}/products?offset=${offset}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get Products  !");
    }

    const data = await response.json();
    return data;
  }
);

// get products related  by id
export const getRelatedProductsById = createAsyncThunk(
  "products/getRelatedProductsById",
  async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}/related`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get Related Products !");
    }

    const data = await response.json();
    return data;
  }
);

// get products related  by slug
export const getRelatedProductsBySlug = createAsyncThunk(
  "products/getRelatedProductsBySlug",
  async (id) => {
    const response = await fetch(`${BASE_URL}/products/slug/${slug}/related`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get Related Products !");
    }

    const data = await response.json();
    return data;
  }
);
