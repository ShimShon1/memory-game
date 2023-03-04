import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";



import snail from "../pics/snail.png"
import blueSnail from "../pics/blueSnail.png"
import shroom from "../pics/shroom.png"
import slime from "../pics/slime.png"
import stump from "../pics/stump.png"
import mano from "../pics/mano.png"
import trojan from "../pics/toyTrojan.gif"
import greenMushroom from "../pics/greenMushroom.gif"
import minerZombie from "../pics/minerZombie.gif"
import platoonChronos from "../pics/platoonChronos.gif"
import stoneGolem from "../pics/stoneGolem.gif"
import hornyMushroom from "../pics/hornyMushroom.png"

import octa from "../pics/octa.png"
import zombieMushroom from "../pics/zombieMushroom.gif"
import bubbling from "../pics/bubbling.gif"
import orangeMushroom from "../pics/orangeMushroom.gif"
import blueMushroom from "../pics/blueMushroom.gif"









export default function Cards(props){
    const [cardsLists,setCardLists] = useState([
        [[blueSnail,"blue snail"],[snail,"snail"],[stump,"stump"],[shroom,"shroom"],[slime,"slime"]], 

        [[shroom,"shroom"],[slime,"slime"],[mano,"Mano"],[trojan,"toy Trojan"],[minerZombie,"miner zoombie"],
        [octa,"octa"],[platoonChronos,"platoon Chronos"],[stoneGolem,"stone Golem"]],


        [[minerZombie,"miner zoombie"],[greenMushroom,"green Mushroom"],]
        // [hornyMushroom,"Horny Mushroom"],[slime,"slime"],[zombieMushroom,"zoombie mushroom"]
        // ,[bubbling,"Bubbling"],[orangeMushroom,"orange mushroom"],[blueMushroom,"blue mushroom"]]
       
    ]) 

    const [cardsAmount,setCardsAmount] = useState(cardsLists[props.level - 1].length)
    const [mobNames,setMobNames] = useState(getNames(cardsLists[props.level - 1]))

    function getNames(list){
        let names = []
        for(let mob of list){
            names.push(mob[1])
        }

        return names

    }
    function handleCardClick(e){
        let fakeMobNames = [...mobNames]

        if(mobNames.some((mob)=>mob === e.target.name)){
            setCardsAmount(cardsLists[props.level - 1].length)
            props.setCorrect(props.correct + 1)
            fakeMobNames.splice(fakeMobNames.indexOf(e.target.name),1)
            setMobNames(fakeMobNames)
            console.log(fakeMobNames);
        }else{
            
            props.setCorrect(0)
            props.setLevel(1)
            setMobNames(["blue snail", "snail","stump","shroom","slime"])

        }
    
    }



    useEffect(()=>{
        if(props.correct === cardsAmount && props.correct > 0){
            if(props.level == 3){
                props.setLevel(props.level + 1)
                return  
            }
            console.log('done')
            let newMobs = []
            for(let mob of cardsLists[props.level]){
                newMobs.push(mob[1])
            }
            
            
            
            
            props.setCorrect(0)
            props.setLevel(props.level + 1)
            

            setMobNames(newMobs)
            console.log(mobNames);
        }
    },[props.correct])

    function generateCards(list){
        props.setCardsAmount(list.length)
        let fakeList = [...list ]

        let randomList = []

        for (let i in list){
            let ran = Math.floor(Math.random() * fakeList.length)
            randomList.push([...fakeList[ran]])
            fakeList.splice(ran,1)

        }

        randomList  = randomList.map((mob)=>{
           return <SingleCard handleCardClick={handleCardClick} name={mob[1]} mobPic={mob[0]} mob={mob} />
        })


        return randomList
    }

        return(
            <section className="w-full">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-lg flex-wrap pt-10  m-auto w-3/4 justify-center">
                {
                    generateCards(cardsLists[props.level - 1]) 
                 }
                    
                </div>
          </section>
    )


}