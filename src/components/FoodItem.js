import React from 'react'
import { IMG_CDN_URL } from '../constants'
const FoodItem = ({name, description, imageId, price}) => {

  return (
    <div className='restaurant-main-div'>
    <h2>{name}</h2>
    <img className='restaurant-img' src={IMG_CDN_URL.imageId} alt={name} />
    {/* <h3>{restaurant?.cuisines.join(', ')}</h3> */}
    <h3>{description}</h3>
    <h3>Rupees: {price/100}</h3>


  </div>
  )
}

export default FoodItem
