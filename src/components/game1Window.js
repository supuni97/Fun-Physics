import React from 'react';
import UnityGame from './UnityGame';
import Game1Lesson from './Game1Lesson';
const game1Window = () => {
  return (
    <div>
    <h2 style={{color:'brown'}}>Physics Dash</h2>
    <Game1Lesson/>
    <UnityGame/>
    </div>
  )
}

export default game1Window;