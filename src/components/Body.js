import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { BodyShimmer } from "./Shimmer";
import { Api_URL } from "../constants";
// import useOnline from '../utils/useOnline';
// import UserContext from "../utils/UserContext";


function filterData(searchText, restaurants) {
    const resFilterData = restaurants.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return resFilterData;
}
// no key <<<<< index key << unique key

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    // const { user, setUser } = useContext(UserContext)
    // useEffect - when we want to first render the page than api and update the page
    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        try {
            const response = await fetch(Api_URL);
            const json = await response.json();
            console.log("json", json)

            // optional chaining
            const dataFirst = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle.restaurants
            const dataSecond = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants

            // ternary operator
            let result = (dataFirst == undefined) ? dataSecond : dataFirst
            // i have to mentain 2 copy all restaurant and filter restaurant
            setAllRestaurants(result)
            setFilterRestaurants(result);
            console.log('result', result)
            console.log('render')

            // conditional rendering
            // if restaurant is empty = shimmer ui
            // id restaurant has data = actual data ui

            // not render component (Early return)
            if (!allRestaurants) return null;

            if (filterRestaurants?.length === 0)
                return <h1>No Restaurant match you Filter !</h1>

        } catch (err) {
            console.log(err)
        }

    }
    // use searchData function and set condition if data is empty show error message
    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
            const filteredData = filterData(searchText, restaurants);
            setFilterRestaurants(filteredData);
        } else {
            setFilterRestaurants(restaurants);
        }
    };

    // const isOnline = useOnline();
    // if (!isOnline) {
    //     return <h1> ✅ Offline, please check your internet connection!!</h1>
    // }

    return (
        (allRestaurants.length === 0) ? (<BodyShimmer />) : (
            <div className="body">
                <div className="searchbox">
                    <input type="text" className='search-input' placeholder='Search your favorite dish '
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }} onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                // need to filter the data
                                // user click on button searchData function is called
                                searchData(searchText, allRestaurants);
                            }

                        }} />
                    <span class="material-symbols-outlined">search</span>

                </div>
                {/* <input type="text" value={user.name} onChange={(e) => {
                    setUser({
                        ...user,
                        name: e.target.value
                    })
                }} /> */}
                 {/* <input type="email" value={user.email} onChange={(e) => {
                    setUser({
                        ...user,
                        email: e.target.value
                    })
                }} /> */}
                <div className="restaurant-list">
                    {(filterRestaurants?.length === 0) ? <h2>Sorry, we couldn't find any Restaurant as {searchText} </h2> :
                        filterRestaurants.map((restaurant) => {
                            return (
                                // link restaurant with id so that when click to perticular restaurant redirect to restaurantMenu component
                                <Link to={'/restaurant/' + restaurant?.info?.id} key={restaurant.info.id}>
                                    <RestaurantCard resData={restaurant?.info} />
                                </Link>

                            )
                        })
                    }
                </div>
            </div>
        )
    )

}

export default Body