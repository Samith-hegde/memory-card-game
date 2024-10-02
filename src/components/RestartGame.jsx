import React from  'react';

function RestartGame({handleRestart}) {
    return (
        <div className="restart">
            <dialog id="dialog-over">    
                <h2>Game Over! Click to restart!</h2>
                <button onClick={() => handleRestart()}> Restart Game! </button>
            </dialog>
        </div>
    )
} 


export default RestartGame;