import RestaurantCardComponent from "./RestaurantCard";
import { resList } from "../utils/Food_data";
import { useState } from "react";

const Body = () => {
    const [listOfRest,setListOfRest] = useState(resList);
  return (
    <div className="Body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRest.filter((rest)=>rest.data.avgRating>=4);
            setListOfRest(filteredList);
        }}>Top Rated</button>
      </div>
      <div className="restroCardContainer">
        {listOfRest.map((restaurant)=><RestaurantCardComponent key={restaurant.data.id}  resData={restaurant} />)};
      </div>
    </div>
  );
};

export default Body;