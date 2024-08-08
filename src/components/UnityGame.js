import React from 'react';

const UnityGame = () => {
  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '600px', position: 'relative' }}>
      <iframe
        src="https://heroic-dusk-6d491e.netlify.app/"
        title="Unity WebGL Game"
        style={{
          border: 'none',
          transform: 'scale(1)', // No scaling, original size
          transformOrigin: 'top left', // Adjust the origin if you scale
          width: '100%', // Full width of the parent div
          height: '100%', // Full height of the parent div
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default UnityGame;
