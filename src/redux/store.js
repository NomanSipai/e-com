import { configureStore } from "@reduxjs/toolkit";
import products from "./productsSlice";

const store = configureStore({
  reducer: {
    app: products,
  },
});

export default store;
