import productsReducer from "../features/products/productSlice";
import filterProductsReducer from "../features/products/filterProductSlice";
import userSlice from "../features/user/userSlice";
import categorySlice from "../features/category/categorySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productsReducer,
    filterProducts: filterProductsReducer,
    user: userSlice,
    category: categorySlice,
  },
});

export default store;
