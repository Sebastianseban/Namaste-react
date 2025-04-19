import React from 'react'
import RestaurantCard from './RestaurantCard';
import restaurantList from '../utils/mockData';
import { useState } from 'react';


const Body = () => {
    const [restaurent, setRestaurent] = useState(restaurantList)

    
    return (
      <div className="body">
        <div className="search-box">
          <input placeholder="search" />
          {/* <CiSearch className="search-icon" /> */}
        </div>
        <div className='filter'>
            <button

            onClick={()=>{
                const filteredList = restaurantList.filter((res)=> res.info.avgRating > 4);
                setRestaurent(filteredList)
            }}
            
            className='filter-btn'>Top Rated Restaurant</button>
        </div>
        <div className="restaurant-container">

          {restaurent.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          ))}
        </div>
      </div>
    );
  };

export default Body