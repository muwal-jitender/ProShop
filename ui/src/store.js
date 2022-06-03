import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import cartReducer from "./reducers/cartReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const preloadedState = {
  cart: { cartItems: cartItemsFromStorage },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
const store = configureStore({ reducer, preloadedState });
export default store;
