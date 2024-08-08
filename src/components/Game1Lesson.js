import React from 'react';
import { useNavigate } from 'react-router-dom';

const Game1Lesson = () => {
  const navigate = useNavigate();
  
  return (
    <div>

      <h3 style={{color:"blueviolet"}}>Lession</h3>
      <a
        className="btn"
        style={{
          background: 'linear-gradient(to left, #ff5733, #ffcc33)', // Gradient from orange to yellow
          color: '#ffffff', // Text color
          padding: '5px 40px',
          borderRadius: "40px",
          margin:'8px'
        }}
        onClick={() => navigate('/lesson/sinhala')}
      >
        Sinhala Medium
      </a>
      <a
        className="btn"
        style={{
          background: 'linear-gradient(to left, #ff5733, #ffcc33)', // Gradient from orange to yellow
          color: '#ffffff', // Text color
          padding: '5px 40px',
          borderRadius: "40px"
        }}
        onClick={() => navigate('/lesson/english')}
  
      >
        English Medium
      </a>
      <h3>Game</h3>
    </div>
  );
}

export default Game1Lesson;
