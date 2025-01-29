import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [isLoginBtn,setIsLoginBtn] = useState(true);
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="app logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>cart</li>
            <button className="login-btn" onClick={()=>{
              setIsLoginBtn(false)
            }} >{isLoginBtn?"Login":"Logout"}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;