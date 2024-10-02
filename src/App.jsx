import { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import Score from './components/Score.jsx';
import RestartGame from './components/RestartGame.jsx';
import WonGame from './components/WonGame.jsx';
import './style.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const dialogOver = document.getElementById('dialog-over');
  const dialogWon = document.getElementById('dialog-won');

  function handleSelectCard(cardID) {
    if (clickedCards.includes(cardID)) {
      dialogOver.showModal();
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
      setClickedCards((prevClickedCards) => [...prevClickedCards, cardID]);
    }
  }

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
    if (clickedCards.length === 10) {
      dialogWon.showModal();
    }
  }, [score, clickedCards]);

  function handleRestart() {
    if (dialogOver.open) dialogOver.close();
    if (dialogWon.open) dialogWon.close();
    setScore(0);
    setClickedCards([]);
  }

  return (
    <>
      <h1> The Deck of Dragons: A Malazan Memory Card Game </h1>
      <Score score={score} highScore={highScore}/>
      <Cards onSelectCard={handleSelectCard}/>
      <RestartGame handleRestart={handleRestart}/>
      <WonGame handleRestart={handleRestart}/>
    </>
  )
}

export default App;