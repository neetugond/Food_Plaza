import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
// const loggedInUser = () => {
//     return false
// }
function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

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
                    <ul>
                        
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        <li>Cart</li>
                        <li>
                        {isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Logout</button>) : (<button onClick={() => setIsLoggedIn(true)} >Login</button>)}
                        </li>
                    </ul>

                    
                </div>
            </div>


        </>

    )
}

export default Header