import { createSlice } from "@reduxjs/toolkit";

// 3 redux

const CartSlice = createSlice({
    // slice name
    name: 'cart',
    // slice initial items state empty
    initialState: {
        items:['banana']
    },
    // reducers to modify the state
    // reducers - plural
    reducers: {
        // addItem - action
        // function is reducer 
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items = []
        }
        
     },
})

export const { addItem, removeItem, clearCart } = CartSlice.actions;

// reducer will take all the reducers and create one reducer and pass it up i.e here, reducer singular
export default CartSlice.reducer;