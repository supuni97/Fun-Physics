import React from 'react';
import { useNavigate } from 'react-router-dom';

const Game1Lesson = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    background: 'linear-gradient(to left, #ff5733, #ffcc33)', // Gradient from orange to yellow
    color: '#ffffff', // Text color
    padding: '10px 30px',
    borderRadius: '40px',
    margin: '8px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontWeight: 'bold'
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(to left, #ffcc33, #ff5733)',
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ color: 'blueviolet' }}>Lessons</h3>
      <a
        className="btn"
        style={{ ...buttonStyle }}
        onMouseEnter={(e) => e.target.style.background = buttonHoverStyle.background}
        onMouseLeave={(e) => e.target.style.background = buttonStyle.background}
        onClick={() => handleNavigate('/lesson/sinhala')}
      >
        Sinhala Medium
      </a>
      <a
        className="btn"
        style={{ ...buttonStyle }}
        onMouseEnter={(e) => e.target.style.background = buttonHoverStyle.background}
        onMouseLeave={(e) => e.target.style.background = buttonStyle.background}
        onClick={() => handleNavigate('/lesson/english')}
      >
        English Medium
      </a>
      <h3 style={{color:"blueviolet"}}>Game</h3>
    </div>
  );
};

export default Game1Lesson;
