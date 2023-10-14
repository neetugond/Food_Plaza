import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
//1 redux - created store
const Store = configureStore({
    reducer: {
        // name of the slice : slice component
        cart: CartSlice
        // user: UserSlice
        // all the slice should be contained inside this big object (store)
    }
})

export default Store;