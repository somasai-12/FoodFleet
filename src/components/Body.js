import RestaurantCardComponent from "./RestaurantCard";
// import { resList } from "../utils/Food_data";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRest, setFilteredListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  if (listOfRest.length == 0) return <Shimmer />;

  return (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the cards and update the UI
              //search text from above search input
              const filteredRestaurant = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRest(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (rest) => rest.info.avgRating >= 4.5
            );
            setFilteredListOfRest(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restroCardContainer">
        {filteredListOfRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCardComponent resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
