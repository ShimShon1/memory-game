import React from "react"

export default function MainHeader(props){
    return(
        <header className="flex justify-center gap-5 bg-emerald-200">
        <p>Level: {props.level}</p>
        <p>Difficulty: {props.difficulty}</p>
        <p>You got {props.correct} / {props.cardsAmount}</p>

      </header>
    )
}