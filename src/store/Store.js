import productsReducer from "../features/products/productSlice";
import userSlice from "../features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userSlice,
  },
});

export default store;
