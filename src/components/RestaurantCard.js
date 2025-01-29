import { CDN_URL } from "../utils/constants";

const RestaurantCardComponent = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData?.info;
  
    return (
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img
          className="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          // src={CDN_URL}
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{ costForTwo }</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };
  

export default RestaurantCardComponent;