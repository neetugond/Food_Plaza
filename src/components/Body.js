import React from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

// no key <<<<< index key << unique key
const Body = () => {
    return (
        <div className="restaurant-list">
            {
                restaurantList.map(restro => {
                    return <RestaurantCard{...restro.data} key={restro.data.id} />
                })
            }
        </div>
    )
}

export default Body