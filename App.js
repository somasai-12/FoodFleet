import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./Food_data";
 

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-logo-background_1390-72.jpg?t=st=1737973953~exp=1737977553~hmac=c2a966be75743b477926459c8ec5561dad0dacfec2260ec04e46b891bb41dd34&w=740"
          alt="app logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCardComponent = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img
        className="res-logo"
        // src={
        //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        //   cloudinaryImageId
        // }
        src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Chicken_Biryani.jpg"
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      <div className="search">Search</div>
      <div className="restroCardContainer">
        {resList.map((restaurant)=><RestaurantCardComponent key={restaurant.data.id}  resData={restaurant} />)};
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
