import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store;