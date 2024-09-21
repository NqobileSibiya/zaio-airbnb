import React from 'react';
import { Button } from '@mui/material';
import "./SearchPage.css";
import SearchResult from './SearchResult';

const SearchPage = () => {
    return (
        <div className="searchPage">
          <div className="searchPage_info">
            <p>62 stays . 26 August to 30 August . 2 guests</p>
            <h1>Stays nearby</h1>
            <Button variant="outlined">Cancellation Flexibility</Button>
            <Button variant="outlined">Type of place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms and beds</Button>
            <Button variant="outlined">More filters</Button>
          </div>
          <SearchResult 
          img="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png?im_w=720&amp;im_q=highq"
          location="Private room in center of London"
          title="Stay at this spacious Edwardian House"
          description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi. Kitchen. Free parking"
          star={4.8}
          price= "$350 per Night/Available!"
          total="$1150 total"
          />
          <SearchResult
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png?im_w=1440&im_q=highq"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi. Kitchen. Free parking"
        star={5}
        price= "$1500 per Night/Available!"
        total="$4500 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=1440&im_q=highq"
        location="Private room in center of London"
        title="Train at the X-Mansion"
        description="New Castle, New York, United States"
        star={3.5}
        price= "$1000 per Night/Available!"
        total="$3000 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=1440&im_q=highq"
        location="Private room in center of London"
        title="Stay in Prince’s Purple Rain house"
        description="Hosted by Wendy And Lisa Members of The Revolution"
        star={5}
          price= "$3500 per Night/Sold Out!"
        total="$11 500 total"
      />
        </div>
    );
}

export default SearchPage;

