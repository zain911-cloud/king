// src/components/Game.js
import React, { useState } from 'react';
import axios from 'axios';

function Game() {
  const [challenge, setChallenge] = useState('');
  const [answer, setAnswer] = useState('');

  const submitAnswer = () => {
    axios.post('/api/game/submit', { answer }, {
      headers: {
        'x-auth-token': localStorage.getItem('token')
      }
    })
      .then(response => {
        // Update game state with new challenge or result
        setChallenge(response.data.nextChallenge);
      })
      .catch(error => console.error('Error submitting answer:', error));
  };

  return (
    <div>
      <h1>Game</h1>
      <p>{challenge}</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={submitAnswer}>Submit</button>
    </div>
  );
}

export default Game;
