import { configureStore } from "@reduxjs/toolkit";
import { Cart } from "./pages";
import cartReducer from "./features/cart/cartSlice.js"


export const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})