import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL, menu_api_URL, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from '../constants'

function RestaurantMenu() {
  // {id} = useParams();
  // or
  const params = useParams();
  const { id } = params
  console.log(params) // get the id in console

  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    getReataurantInfo();

  }, [])

  async function getReataurantInfo() {
    const data = await fetch(menu_api_URL + id);

    const json = await data.json()
    // Set restaurant data
    console.log('json',json)
    const restaurantData = json?.data?.cards?.map(x => x.card)?.
      find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
    console.log('restaurantdata',restaurantData)
    setRestaurant(restaurantData)
  }

  return (

    <div>
      <h2>{restaurant?.name}</h2>
      <img className='restaurant-img' src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
      <h3>{ restaurant?.cuisines.join(', ')}</h3>
      <h3>{restaurant?.areaName}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating}</h3>
      <h3>{restaurant?.costForTwo}</h3>


    </div>

  )
}

export default RestaurantMenu