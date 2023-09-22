import React  from 'react'

function Header() {

    return (
        <>
            {/* <h1>Header</h1> */}
            <div className='nav-main'>
                <div className="logo">
                    <img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687709.png" alt="logo" />
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