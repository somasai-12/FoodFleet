import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { MENU_URL } from "../utils/constants";

const RestaurantMenu = ()=>{

    const [resInfo,setResInfo] = useState(null);
    const { id } = useParams();


    useEffect(()=>{
        fetchMenu();
    },[]);

    // 65226
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + id +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json(); 
        //console.log(json);

        setResInfo(json.data)
        
    };

    if(resInfo === null) return <Shimmer />

    const {name,cuisines,locality,avgRatingString,totalRatingsString,costForTwoMessage,areaName} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>Restuarant Menu</h2>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h3>{areaName}</h3>
            <h3>{locality}</h3>
            <h3>{avgRatingString}</h3>
            <h3>{totalRatingsString}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=><li id={item.card.info.id}>Rs{item.card.info.name}- Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
           
        </div> 
    )
}

export default RestaurantMenu;