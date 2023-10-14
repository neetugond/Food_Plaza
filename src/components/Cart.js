import { useSelector, useDispatch } from "react-redux"

import FoodItem from "./FoodItem"
import { clearCart } from "../utils/CartSlice"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }
   
    return (
        <div>
            <button onClick={()=>handleClearCart()}>Clear Cart</button>
            <h1>Cart {cartItems.length}</h1>
            {cartItems.map(item => <FoodItem key={item.id} {...item} />)}
           
            
        </div>
    )
}

export default Cart