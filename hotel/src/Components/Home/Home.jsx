import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="main">
    <div className="home-container">
      <div className="home-section">
        <h1>Welcome to Grand Blue Hotel</h1>
        <p>comfort luxury meets you</p>
        <Link to={"/BookingForm"}><button>Start Booking</button></Link>
      </div>
      </div>
      </div>
  );
};

export default Home;