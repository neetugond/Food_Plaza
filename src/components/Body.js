import React, { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";


function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}
// no key <<<<< index key << unique key
const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList)
    const [searchText, setSearchText] = useState("") //declaring react local variable searchText. setSearchText - function to update the variable
    return (
        <>
            <div className="searchbox">
                <input type="text" className='search-input' placeholder='Search'
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                <button className='search-btn' onClick={() => {
                    // need to filter the data
                    const data = filterData(searchText, restaurants)
                    //update the state - restaurants
                    setRestaurants(data);
                }}>search </button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />

                        )
                    })
                }
            </div>
        </>

    )
}

export default Body