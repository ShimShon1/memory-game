import React from "react"




export default function WinScreen(props){

    return(
        <div className="h-2/3 w-screen p-10 text-bold  text-5xl flex flex-col items-center
        gap-3  justify-center ">
            <h2>  You beat the game! 
            </h2>
          


            <button className="border-2 border-double bg-emerald-300 p-3 px-6 text-3xl" 
            onClick={()=>window.location.reload()}>Restart</button>
        </div>
    )


}