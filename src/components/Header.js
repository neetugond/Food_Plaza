import React, { useState } from 'react'
import About from './About'
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
                        <h3>Home</h3>
                        <h3>about</h3>
                        <h3>contact</h3>
                        <h3>cart</h3>
                        {isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Logout</button>) : (<button onClick={() => setIsLoggedIn(true)} >Login</button>)}
                </div>
            </div>


        </>

    )
}

export default Header