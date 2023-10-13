import {useContext} from "react";
import {IMG_CDN_URL} from '../constants'
import UserContext from '../utils/UserContext';



const RestaurantCard = (props) => {
    const { resData } = props;
    const {
name,cloudinaryImageId,avgRating,cuisines,costForTwo,sla,aggregatedDiscountInfoV2
    } = resData
    
  const { user } = useContext(UserContext)
    return (
        <div style={{textDecoration: 'inherit', color:'white'}} className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            
            <h3 style={{color:'black'}}>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <div className="cardsubdiv">
                { avgRating < 4 ?
                <p className="ratingRed"><span class="material-symbols-outlined">
                star
                </span>{avgRating}</p>:
                <p className="ratinggreen"><span class="material-symbols-outlined">
                star
                </span>{avgRating}</p>}
                <p>{sla?.lastMileTravelString}</p>
                <p>{costForTwo.toUpperCase()}</p>
                
        <h3>{user.name}{ user.email}</h3>
            </div>
            {/* <div className="discountdiv">
                
                <p>{((aggregatedDiscountInfoV2.header == undefined) ?'NO DISCOUNT': aggregatedDiscountInfoV2.header)} </p>
            </div> */}
            
            
            
        </div>
    )
};

export default RestaurantCard;