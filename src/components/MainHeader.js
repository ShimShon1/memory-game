import React from "react"

export default function MainHeader(props){
    return(
        <header className=" bg-emerald-200 p-2 pt-3 ">
        <h1 className="text-2xl md:text-4xl font-bold">The MapleStory Memory Game</h1>
        <span className="md:text-xl text-lg">Do not click the same mob twice</span>
        <hr></hr>
        <nav className="flex justify-center gap-5 mt-4 md:text-xl">
          <p>Level: {props.level}</p>
          <p>Difficulty: {props.difficulty}</p>
          <p>You got {props.correct} / {props.cardsAmount}</p>

        </nav>
       

      </header>
    )
}