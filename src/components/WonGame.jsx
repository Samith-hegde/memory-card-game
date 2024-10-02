import React from 'react';

function WonGame({handleRestart}) {
    return (
        <div className="won">
            <dialog id="dialog-won">    
                <h2> Congratulations! You won! Would you like to play again? </h2>
                <button onClick={() => handleRestart()}> Restart Game! </button>
            </dialog>
        </div>
    )
}

export default WonGame;