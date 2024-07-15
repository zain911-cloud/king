// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to King of Kings</h1>
      <p>The ultimate treasure hunt game.</p>
      <div className="nav-links">
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/game" className="nav-link">Game</Link>
        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </div>
    </div>
  );
}

export default Home;
