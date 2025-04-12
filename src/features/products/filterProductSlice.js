import { createSlice } from "@reduxjs/toolkit";
import {
  filterProductsByTitle,
  filterProductsByPrice,
  filterProductsByRange,
  filterProductsByCategory,
  filterProducts,
} from "./filterProducts"; // update with actual file path

const initialState = {
  filteredProducts: [],
  loading: false,
  error: null,
};

const filterProductSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.loading = true;
      state.error = null;
    };

    const handleFulfilled = (state, action) => {
      state.loading = false;
      state.filteredProducts = action.payload;
    };

    const handleRejected = (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    };

    // Title filter
    builder
      .addCase(filterProductsByTitle.pending, handlePending)
      .addCase(filterProductsByTitle.fulfilled, handleFulfilled)
      .addCase(filterProductsByTitle.rejected, handleRejected);

    // Price filter
    builder
      .addCase(filterProductsByPrice.pending, handlePending)
      .addCase(filterProductsByPrice.fulfilled, handleFulfilled)
      .addCase(filterProductsByPrice.rejected, handleRejected);

    // Range filter
    builder
      .addCase(filterProductsByRange.pending, handlePending)
      .addCase(filterProductsByRange.fulfilled, handleFulfilled)
      .addCase(filterProductsByRange.rejected, handleRejected);

    // Category filter
    builder
      .addCase(filterProductsByCategory.pending, handlePending)
      .addCase(filterProductsByCategory.fulfilled, handleFulfilled)
      .addCase(filterProductsByCategory.rejected, handleRejected);

    // Combined filter
    builder
      .addCase(filterProducts.pending, handlePending)
      .addCase(filterProducts.fulfilled, handleFulfilled)
      .addCase(filterProducts.rejected, handleRejected);
  },
});

export default filterProductSlice.reducer;
