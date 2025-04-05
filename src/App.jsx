import { useState,useEffect } from 'react'
import './App.css'
import sun from "./assets/sun.jpg"
import earth from "./assets/earth.png"
import jupiter from "./assets/jupitor.avif"
import moon from "./assets/moon.webp"
import star from "./assets/star.jpg"
import saturn from "./assets/saturn.jpeg"

import SingleCard from './components/SingleCard'

const cardImages = [
  { src: sun ,matched:false},
  { src: earth,matched:false },
  { src: jupiter ,matched:false},
  { src: moon,matched:false },
  { src: star,matched:false },
  { src: saturn ,matched:false}
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: Math.random() }));

    setCards(shuffled);
    setTurns(0);
  };

  //compare 2 cards,
useEffect(() => {
  if (choiceOne && choiceTwo) {
    if (choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });
      setTimeout(() => resetTurn(), 1000); // Give some time to celebrate 🎉
    } else {
      setTimeout(() => resetTurn(), 1000); // Give some time to observe 🧐
    }
  }
}, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
}

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  return (
    <>
      <div className='backgr'>   </div>
      <div className='content'>
           <h1>Magic Memory</h1>
      <button onClick={shuffleCards}>New Game</button>
     
           <div className='card-grid'>
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
      
      </div>
     
   
      
     
    </>
  )
}

export default App;
