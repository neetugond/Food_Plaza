import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}
// no key <<<<< index key << unique key
const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("") //declaring react local variable searchText. setSearchText - function to update the variable
    

    // useEffect - when we want to first render the page than api and update the page
    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log("json", json)
         
        const dataFirst = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle.restaurants


        const dataSecond =json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants

        // config driven ui data that why ternary operator
        let result = (dataFirst == undefined) ? dataSecond : dataFirst
        
        setAllRestaurants(result)
        setFilterRestaurants(result);
        console.log(result)
    }
    return (
        <div className="body">
            <div className="searchbox">
                <input type="text" className='search-input' placeholder='Search'
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                <button className='search-btn' onClick={() => {
                    // need to filter the data
                    const data = filterData(searchText, allRestaurants)
                    //update the state - restaurants
                    setFilterRestaurants(data);
                }}>search </button>
            </div>
            <div className="restaurant-list">
                {
                    filterRestaurants.map((restaurant) => {
                        return (<RestaurantCard resData ={restaurant?.info} key={restaurant.info.id} />

                        )
                    })
                }
            </div>
        </div>

    )
}

export default Body