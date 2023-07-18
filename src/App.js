
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
 
const cardImages = [
  {"src":"/images/pattern1.jpg", matched:false},
  {"src":"/images/pattern2.png", matched:false},
  {"src":"/images/pattern3.png", matched:false},
  {"src":"/images/pattern4.jpg", matched:false},
  {"src":"/images/pattern5.jpg", matched:false},
  {"src":"/images/pattern6.jpg", matched:false},
  {"src":"/images/pattern7.jpg", matched:false},
  {"src":"/images/pattern8.jpg", matched:false},
  {"src":"/images/pattern9.png", matched:false},
  {"src":"/images/pattern10.jpg", matched:false},
  {"src":"/images/pattern11.jpg", matched:false},
  {"src":"/images/pattern12.jpg", matched:false},
]
function App() {

const [cards,setCards] = useState([])
const [turns,setTurns] = useState(0)
const [choiceOne,setChoiceOne] = useState(null)
const [choiceTwo,setChoiceTwo] = useState(null)
const [isDisabled,setIsDisabled] = useState(false)
  //shuffle cards
  const shufflecards = ()=>{
    const shuffledCards = [...cardImages,...cardImages]
    .sort(()=>Math.random() - 0.5 )
    .map((card)=>({...card,id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }
  //handle a choice
 const handleChoice =(card)=>{
 choiceOne?setChoiceTwo(card):setChoiceOne(card)
 }

//compare
// const compareChoice=()=>{
//   console.log(choiceOne,choiceTwo)
//   if({choiceOne}==={choiceTwo}){
//     console.log("both the cards match")
//     resetTurn()
//   }
//   else{
//     console.log("both choices do not match")
//   }
// }

useEffect(() => {
  if(choiceOne&&choiceTwo){
   setIsDisabled(true)
    if(choiceOne.src === choiceTwo.src){
         setCards(prevCards =>{
          return prevCards.map(card=>{
            if(card.src === choiceOne.src){
              return {...card,matched:true}
            } else {
              return card
            }
          })
         })
    resetTurn()
  }
  else{
    
    setTimeout(()=> resetTurn(),1000)
    }
  }
},[choiceOne,choiceTwo])



 //reset choices & increase turn
 const resetTurn = () =>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns+1)
  setIsDisabled(false)
 }
  return (
    <div className="App">
      <h1>Magic Game</h1>
      <button onClick={shufflecards}>New Game</button>
      <div className='card-grid'>
      {cards.map(card=>(
        
          <Card card={card} key={card.id} handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched} 
          isDisabled={isDisabled}/>
         
     
      ))}
     </div>
     
      <p>Turns - {turns}</p>
    </div>
  );
}

export default App;
