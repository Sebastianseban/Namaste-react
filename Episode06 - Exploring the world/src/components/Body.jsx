import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard';
import restaurantList from '../utils/mockData';
import { useState } from 'react';


const Body = () => {
    const [restaurent, setRestaurent] = useState(restaurantList)

    useEffect(()=>{
      fetchData()
    },[])

    const fetchData = async () => {
      try {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
    
        console.log(json);
        setRestaurent(json?.data?.cards[2]?.data?.data?.cards || []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };



    
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