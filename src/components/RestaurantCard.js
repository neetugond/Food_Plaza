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
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h2>{avgRating}</h2>
            <p>{cuisines}</p>
        </div>
    )
};

export default RestaurantCard;