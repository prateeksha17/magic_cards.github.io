import React from 'react'
import './Card.css'
export default function Card({card,handleChoice,flipped,isDisabled}) {

    const handleClick =()=>{
      if(!isDisabled){
        handleChoice(card)
      }
        
    }
  return (
    
    <div className='card'>
      <div className={flipped?"flipped":""}>
    <img className='front' src={card.src} alt='card front'/>

    <img className='back' 
    src="/images/background_card.jpg" 
    onClick={handleClick}
    alt='card back'/>
    </div>
  </div>
  )
}
