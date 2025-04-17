import React from "react";
import ReactDOM from "react-dom/client";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
          alt=""
        />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>🛒</li>
        </ul>
      </div>
    </div>
  );
};



export const RestaurantCard = () => {
  return (
    <div className="res-card">
        <h3>Meghana Foods</h3>

    </div>
  )
}




export const Body = () => {
  return (
    <div className="body">
        <div className="serach">Search</div>
        <div className="res-container">
            <RestaurantCard/>
        </div>

    </div>
  )
}


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>       
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
