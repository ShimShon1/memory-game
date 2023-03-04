import React from "react";



export default function SingleCard(props){
    return(
        <div className='border flex flex-col items-center justify-center border-black p-2  cursor-pointer
        hover:bg-gray-200 h-40 relative'>
            <p className="absolute top-0 w-full bg-opacity-60 bg-slate-200">{props.name}</p>


          <img src={props.mobPic} alt="" className="min-h-2/3 h-full  "  onClick={props.handleCardClick}  name={props.name}/>
        </div>
    )
}