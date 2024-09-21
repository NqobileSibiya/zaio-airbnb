import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./SearchResult.css";

const SearchResult = ({ img, location, title, description, star,price, total }) => {
  return (
    <div className="SearchResult">
        <img src={img} alt="" />
        <FavoriteBorderIcon className="searchResult_heart" />
        <div className="searchResult_infoTop">
            <div className="searchResult_infoTop">
            <p>{location}</p>
            <h3>{title}</h3>
            <p>----</p>
            <p>{description}</p>
            </div>
            <div className="searchResult_infoBottom">
                <div className="searchResult-stars">
                    <p><strong>{star}</strong></p>
                </div>
                <div className="searchResult-price">
                    <h2>{price}</h2>
                    <h1>{total}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult;