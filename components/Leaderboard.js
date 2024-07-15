// src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data
    axios.get('/api/game/leaderboard')
      .then(response => setLeaders(response.data))
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaders.map(leader => (
          <li key={leader._id}>{leader.username} - {leader.points}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
