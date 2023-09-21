import React from "react";
import {IMG_CDN_URL} from '../constants'



const RestaurantCard = ({
    name,
    cuisines,
    avgRating,
    cloudinaryImageId
}) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h2>{avgRating}</h2>
            <p>{cuisines}</p>
        </div>
    )
};

export default RestaurantCard;