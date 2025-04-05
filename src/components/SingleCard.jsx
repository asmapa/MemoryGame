import './SingleCard.css'
import space from "../assets/space.webp"
import React from 'react'

const SingleCard = ({ card ,handleChoice,flipped}) => {
    
    const handleClick = () => {
        handleChoice(card);
    }
  return (
  <div className="card">
  <div className={flipped ? "flipped" : ""}>
    <img className="front" src={card.src} alt="card front" />
    <img className="back" src={space} onClick={handleClick} alt="card back" />
  </div>
</div>

  )
}

export default SingleCard
