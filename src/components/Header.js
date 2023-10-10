import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
// const loggedInUser = () => {
//     return false
// }
function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const isOnline = useOnline()
    return (
        <>
            {/* <h1>Header</h1> */}
            <div className='nav-main'>
                <div className="logo">
                    <img src="https://icon-library.com/images/dinner-menu-icon/dinner-menu-icon-20.jpg" alt="logo" />
                </div>
                <div className="restro-name">
                    <h1>Food Plaza</h1>
                </div>

                <div className="nav-menu">
                    <ul >
                        <Link style={{ textDecoration: 'inherit' }} to='/veg'><li>Veg</li>
                        </Link>

                        <Link style={{ textDecoration: 'inherit' }} to="/"><li>Home</li></Link>
                        <Link style={{ textDecoration: 'inherit' }} to="/about"><li>About</li></Link>
                        <Link style={{ textDecoration: 'inherit' }} to="/contact"><li>Contact</li></Link>
                        <li>Cart</li>
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