import React, { useState } from "react";


const Header = () => {

  const [button, setButton] = useState("login")


    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"} alt="Tasty Trails Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={()=>{
              button === "login" ? setButton("logout") :
              setButton("login")
            }} className="login">{button}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;