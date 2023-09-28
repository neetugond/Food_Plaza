import React from "react";
import {IMG_CDN_URL} from '../constants'



const RestaurantCard = (props) => {
    const { resData } = props;
    const {
name,cloudinaryImageId,avgRating,cuisines,costForTwo
    } = resData
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>{ costForTwo}</h3>
            <h2>{avgRating}</h2>
            <p>{cuisines.join(', ')}</p>
        </div>
    )
};

export default RestaurantCard;