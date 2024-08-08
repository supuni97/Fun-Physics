import React from 'react';
import UnityGame from './UnityGame';
import Game1Lesson from './Game1Lesson';

const Game1Window = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ color: 'brown', fontSize: '2.5em', marginBottom: '20px' }}>Physics Dash</h2>
      <Game1Lesson />
      <div style={{ marginTop: '40px' }}>
        <UnityGame />
      </div>
    </div>
  );
};

export default Game1Window;
