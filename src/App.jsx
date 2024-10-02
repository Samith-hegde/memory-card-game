import { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import Score from './components/Score.jsx';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function handleSelectCard(cardID) {
    if (clickedCards.includes(cardID)) {
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
  }, [score]);

  return (
    <>
      <h1> The Deck of Dragons: A Malazan Memory Card Game </h1>
      <Score score={score} highScore={highScore}/>
      <Cards onSelectCard={handleSelectCard}/>
    </>
  )
}

export default App;