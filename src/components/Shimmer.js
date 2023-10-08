import React from "react"

export const BodyShimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(9).fill("").map((el, index) => {
                return (
                    <div key={index} className="shimmer-card"></div>
                )
            })}
        </div>
    )
}

export const RestaurantShimmer = () => {
    return (
        <div className='Restaurant-single-container'>
            <div className="restaurant-shimmer-main">
                <div className="restaurant-shimmer"></div>
                {Array(4).fill('').map((e, index) => (
                    <div key={index}  className="restaurant-shimer-text"></div>
                ))}
               
            </div>
          <div className="menu-shimmer-main">
                {Array(10).fill('').map((el, index) => (
                    <div key={index} className="menu-shimmer"></div>
                ))}
            </div>
        </div>
    )
}

