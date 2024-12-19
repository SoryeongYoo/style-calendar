import React from 'react'
import { Link } from 'react-router-dom';
import Weather from './Weather';

const Home = () => {
  return (
    <div className='home-container'>
      {/* HEADER */}
      <header className='home-header'>
        <h1>Style Calendar</h1>
        <p>Plan Your Outfits Effortlessly!</p>
      </header>

      {/* Button */}
      <div className='home-buttons'>
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/join" className="home-button">Join</Link>
      </div>

      {/* 로그인 전 날씨 api */}
      <div className='home-main'>
        <Weather></Weather>
      </div>

    </div>
  )
}

export default Home