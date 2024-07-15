// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user data
    axios.get('/api/game/user', {
      headers: {
        'x-auth-token': localStorage.getItem('token')
      }
    })
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Points: {user.points}</p>
      <p>Rank: {user.rank}</p>
      {/* Add more profile details and edit options */}
    </div>
  );
}

export default Profile;
