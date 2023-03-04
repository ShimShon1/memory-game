import React from "react";



export default function SingleCard(props){
    return(
        <div className='Card flex flex-col items-center justify-center  
        border-double border-4 border-cyan-500 p-2  cursor-pointer
        hover:bg-cyan-200 h-40 bg-cyan-100 bg-opacity-60 relative
        md:text-xl'>
            <p className="absolute top-0 w-full bg-opacity-60 bg-slate-200">{props.name}</p>


          <img src={props.mobPic} alt="" className="min-h-2/3 h-full  "  onClick={props.handleCardClick}  name={props.name}/>
        </div>
    )
}