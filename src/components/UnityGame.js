import React from 'react';

const UnityGame = () => {
  const openGameInNewWindow = () => {
    window.open("https://heroic-dusk-6d491e.netlify.app/", "_blank", "fullscreen=yes");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <button onClick={openGameInNewWindow} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Launch Game
      </button>
    </div>
  );
};

export default UnityGame;
