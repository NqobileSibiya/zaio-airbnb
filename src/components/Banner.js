import React, { useState } from 'react';
import Button from "@mui/material/Button";
import "./Banner.css";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { fetchPropertiesNearby } from "../actions/UserActions"; 


const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();

  const handleExploreNearby = () => {
    const userLocation = { latitude: 40.7128, longitude: -74.0060 }; // Default location (New York, for example)
    
    // Dispatch an action to fetch properties near the user's location
    dispatch(fetchPropertiesNearby(userLocation));
  };
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
            onClick={() => setShowSearch(!showSearch)}
            className="banner_searchButton"
            variant="outlined"
        >
            {showSearch ? "Hide" : "Search Dates"}
        </Button>
        </div>
        <div className="banner_info">
            <h1>Get out and stretch your imagination</h1>
            <h5>
                Plan a different Kind of gateway to uncover the hidden gems near you.
            </h5>
            <Button variant="outlined" onClick={handleExploreNearby}
            >
              Explore Nearby
            </Button>
        </div>
    </div>
  );
};

export default Banner;
