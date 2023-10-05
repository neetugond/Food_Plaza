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

