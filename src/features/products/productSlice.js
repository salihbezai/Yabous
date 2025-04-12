import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  getProductsWithPagination,
  getRelatedProductsById,
  getRelatedProductsBySlug,
  getSingleProductById,
  getSingleProductBySlug,
  updateProduct,
} from "./productActions";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // fetch products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // get single product by id
    builder
      .addCase(getSingleProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getSingleProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // get product by slug
    builder
      .addCase(getSingleProductBySlug.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleProductBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getSingleProductBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // create Product
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // update Product
    builder
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // delete Product
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // get products with pagination
    builder
      .addCase(getProductsWithPagination.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsWithPagination.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductsWithPagination.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // get related products by id
    builder
      .addCase(getRelatedProductsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRelatedProductsById.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getRelatedProductsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // get related products by slug
    builder
      .addCase(getRelatedProductsBySlug.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRelatedProductsBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getRelatedProductsBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
