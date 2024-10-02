import React from 'react';

function Score ({score, highScore}) {
  return (
    <>
    <p> Score: {score} </p>
    <p> High Score: {highScore} </p>
    </>
  )
}

export default Score;