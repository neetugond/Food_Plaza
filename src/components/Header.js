import React  from 'react'

function Header() {

    return (
        <>
            {/* <h1>Header</h1> */}
            <div className='nav-main'>
                <div className="logo">
                    <img src="https://icon-library.com/images/food-icon-white/food-icon-white-15.jpg" alt="logo" />
                </div>
                <div className="restro-name">
                    <h1>Food Plaza</h1>
                </div>
               
                <div className="nav-menu">
                    <h3>Home</h3>
                    <h3>about</h3>
                    <h3>cart</h3>
                    <h3>profile</h3>
                </div>
            </div>
        </>

    )
}

export default Header