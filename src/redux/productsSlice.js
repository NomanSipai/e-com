import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  products: [],
  loading: false,
  error: null,
  totalQuantity: 0,
  totalPrice: 0,
  categoryFilterProduct: [],
  showCart: false,
  productDetailsData: localStorage.getItem("product-details")
    ? JSON.parse(localStorage.getItem("product-details"))
    : [],
  cartProducts: localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [],
  // cartProducts: [],
};

export const getData = createAsyncThunk("getData", async () => {
  return await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data);
});

const products = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.categoryFilterProduct = state.products;
      state.error = null;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    addToCart: (state, action) => {
      const find = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      toast.success("Product Added!");
      if (find >= 0) {
        state.cartProducts[find].quantity += 1;
      } else {
        state.cartProducts.push(action.payload);
        localStorage.setItem("product", JSON.stringify(state.cartProducts));
      }
    },
    filterProduct: (state, action) => {
      state.products.filter((user) =>
        user.title.toLowerCase().includes(action.payload)
      );
    },

    increase: (state, action) => {
      const increaseQuantity = state.cartProducts.findIndex(
        (item) => item.id === action.payload
      );
      if (increaseQuantity >= 0) {
        state.cartProducts[increaseQuantity].quantity += 1;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    decrease: (state, action) => {
      const decreaseQuantity = state.cartProducts.findIndex(
        (item) => item.id === action.payload
      );
      if (decreaseQuantity >= 0) {
        state.cartProducts[decreaseQuantity].quantity -= 1;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    removeCartProducts: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload
      );
      toast.success("Product remove!");
      localStorage.setItem("product", JSON.stringify(state.cartProducts));
    },
    toggleCart: (state) => {
      state.showCart = state.showCart = true;
      console.log(state.showCart);
    },
    toggleShowCart: (state) => {
      state.showCart = state.showCart = false;
    },
    handleCheckOut: (state) => {
      toast.success("Your Order Successfully Placed");
      state.cartProducts = [];
      localStorage.setItem("product", JSON.stringify(state.cartProducts));
    },
    productDetails: (state, action) => {
      state.productDetailsData.push(action.payload);
      localStorage.setItem(
        "product-details",
        JSON.stringify(state.productDetailsData)
      );
    },
    filterCategory: (state, action) => {
      state.products.map((item) => {
        if (item.category === action.payload) {
          state.categoryFilterProduct = state.products.filter(
            (item) => item.category === action.payload
          );
        } else if (action.payload === "All") {
          state.categoryFilterProduct = state.products;
        }
      });
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  increase,
  decrease,
  categoryFilterData,
  removeCartProducts,
  toggleCart,
  handleCheckOut,
  toggleShowCart,
  filterProduct,
  productDetails,
  filterCategory,
} = products.actions;

export default products.reducer;
