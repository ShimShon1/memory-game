import { useState } from "react";
import MainHeader from "./components/MainHeader"
import Cards from "./components/Cards"





function App() {
  const [level,setLevel] = useState(1)
  const [difficulty,setDifficulty] = useState("Easy")
  const [cardsAmount, setCardsAmount] = useState(0)
  const [correct, setCorrect] = useState (0)

  if(level <= 3){
    return (
      <div className="App text-center  lg:w-full m-auto">
  
        <section className="bg-emerald-100 pb-10 ">
          <MainHeader cardsAmount={cardsAmount} level={level} difficulty={difficulty} correct = {correct}  />
          <Cards setCardsAmount={setCardsAmount} setCorrect={setCorrect} setDifficulty={setDifficulty}
          setLevel={setLevel}  correct={correct} level={level} cardsAmount={cardsAmount}/>
        
        </section>
  
      
      </div>
    );

  }else{
    return(
      <div className="App text-center  lg:w-1/2 m-auto">

      <MainHeader cardsAmount={cardsAmount} level={level} difficulty={difficulty} correct = {correct}  />
      <div>YOU WON</div>

      </div>
      )
  }
 
}

export default App;
