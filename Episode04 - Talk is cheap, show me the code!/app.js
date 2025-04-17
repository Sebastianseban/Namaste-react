import React from "react";
import ReactDOM from "react-dom/client"



export const Header = () => {
  return (
    <div className="header">

        <div className="logo-container">
            <img className="logo" src="https://marketplace.canva.com/EAGZJ2Na9V0/1/0/1600w/canva-red-and-orange-bold-fast-food-restaurant-animated-logo-0ujmrXVcncU.jpg" alt="" />
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
  )
}



const  AppLayout = () => {
    return (
        <div className="app">

            <Header/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)