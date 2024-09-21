import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Banner from './Banner';
import Card from "./Card";
import './Home.css';
import { listListing } from "../actions/ListingsActions";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector(state => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2> 
      ) : error ? (
        <h3>{error.message}</h3> 
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
              key={listing.id}  
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png?"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          price= "$350 per Night/Available!"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png?im_w=1440&im_q=highq"
          title="Playdate at Polly Pocket’s Compact"
          description="Westford, Massachusetts, United States Daytime experience"
          price= "$1500 per Night/Available!"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=1440&im_q=highq"
          title="Train at the X-Mansion"
          description="New Castle, New York, United States"
          price= "$1000 per Night/Available!"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=1440&im_q=highq"
          title="Make core memories with Inside Out 2"
          description="Las Vegas, Nevada, United States"
          price= "$1500 per Night/Available!"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=1440&im_q=highq"
          title="Stay in Prince’s Purple Rain house"
          description="Hosted by Wendy And Lisa Members of The Revolution"
          price= "$3500 per Night/Sold Out!"
        />
      </div>
    </div>
  );
};

export default Home;