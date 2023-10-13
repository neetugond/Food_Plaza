import React, { useEffect, useState, useContext } from 'react'
import { useInRouterContext, useParams } from 'react-router-dom'
import { IMG_CDN_URL, menu_api_URL, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from '../constants'
import { RestaurantShimmer } from './Shimmer';

function RestaurantMenu() {
  // {id} = useParams();
  // or
 
  const params = useParams();
  const { id } = params
  console.log(params) // get the id in console
  const [restaurant, setRestaurant] = useState(null)
  const [menu, setMenu] = useState()

  useEffect(() => {
    getReataurantInfo();

  }, [])

  async function getReataurantInfo() {
    const data = await fetch(menu_api_URL + id);

    const json = await data.json()
    // Set restaurant data
    console.log('json', json)
    const restaurantData = json?.data?.cards?.map(x => x.card)?.
      find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
    console.log('restaurantdata', restaurantData)
    setRestaurant(restaurantData)
    // console.log(MENU_ITEM_TYPE_KEY)

    // Set menu item data
    const menuItemsData = json?.data?.cards.find(x => x.groupedCard)?.
      groupedCard?.cardGroupMap?.REGULAR?.
      cards?.map(x => x.card?.card)?.
      filter(x => x['@type'] == MENU_ITEM_TYPE_KEY)?.
      map(x => x.itemCards).flat().map(x => x.card?.info) || [];
    // console.log(menuItemsData)
    console.log('menuData', menuItemsData)
    setMenu(menuItemsData)
  }


  return  (!restaurant) ? <RestaurantShimmer/> :(
   
    <div className='Restaurant-single-container'>
      <div className='restaurant-main-div'>
        <h2>{restaurant?.name}</h2>
        <img className='restaurant-img' src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
        {/* <h3>{restaurant?.cuisines.join(', ')}</h3> */}
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwo}</h3>


      </div>
      <div className='menu-main-div'>
        <h1>Menu</h1>
        <ul>
          {menu?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
    
  )
}

export default RestaurantMenu