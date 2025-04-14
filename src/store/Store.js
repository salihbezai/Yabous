import productsReducer from "../features/products/productSlice";
import filterProductsReducer from "../features/products/filterProductSlice";
import userSlice from "../features/user/userSlice";
import authSlice from "../features/auth/authSlice";

import categorySlice from "../features/category/categorySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productsReducer,
    filterProducts: filterProductsReducer,
    user: userSlice,
    auth: authSlice,
    category: categorySlice,
  },
});

export default store;
