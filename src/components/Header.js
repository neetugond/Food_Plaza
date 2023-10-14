import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import useOnline from '../utils/useOnline'
// import UserContext from '../utils/UserContext'

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const isOnline = useOnline()
    // const {user} = useContext(UserContext)
    
    // 4. redux- subscribe to the store with useSelector hook
    const cartItems = useSelector(store => store.cart.items)
    console.log("cart",cartItems)
    return (
        <>
            <div className='nav-main'>
                <div className="logo">
                    <img src="https://icon-library.com/images/dinner-menu-icon/dinner-menu-icon-20.jpg" alt="logo" />
                </div>
                <div className="restro-name">
                    <h1>Food Plaza</h1>
                    {/* <h3>{user.name}</h3> */}

                </div>

                <div className="nav-menu">
                    <ul >
                        {/* <Link style={{ textDecoration: 'inherit' }} to='/veg'><li>Veg</li>
                        </Link> */}
                        <Link style={{ textDecoration: 'inherit' }} to="/"><li>Home</li></Link>
                        <Link style={{ textDecoration: 'inherit' }} to="/about"><li>About</li></Link>
                        <Link style={{ textDecoration: 'inherit' }} to="/contact"><li>Contact</li></Link>
                        <li>Cart { cartItems.length}</li>
                    </ul>
                    <p>
                        {isOnline ? '🟢' : '🔴'}

                    </p>
                    {isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Logout</button>) : (<button onClick={() => setIsLoggedIn(true)} >Login</button>)}



                </div>
            </div>


        </>

    )
}

export default Header