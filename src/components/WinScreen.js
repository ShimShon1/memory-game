import React, { useState }  from "react"
import Confetti from 'react-confetti'
import { useEffect } from 'react'




export default function WinScreen(props){
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerheight)


    useEffect(()=>{
        window.addEventListener("resize",()=>{

            setWidth(window.innerWidth)
            setHeight(window.innerheight)

        })

    },[])

    return(
        <div className="h-2/3 w-screen p-10 text-bold  text-5xl flex flex-col items-center
        gap-10  justify-center ">




            <Confetti
                width={width}
                height={height}
                numberOfPieces={500}
                gravity={0.1}
                initialVelocityY={10}
            />


            <h2 className="lg:text-6xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 bg-clip-text text-transparent 	"> You beat the game! </h2>
          


            <button className="border-2 border-double bg-emerald-300 p-3 px-6 text-3xl" 
            onClick={()=>window.location.reload()}>Restart</button>
        </div>
    )


}