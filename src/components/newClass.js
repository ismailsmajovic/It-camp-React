import React, { useState } from "react";

const DATA =[
    'prva recenica',
    'druga recenica',
    'trevca recenica',
    'cetvrta',
    '....',
    'stota'
]

const NewClass =()=>{

    const [array, setAray]= useState(DATA)

    const generate=()=>
        Math.random().toString(36).slice(2, 7)

        const recverseArr =()=>{
          const _array = [...array];
          const reversed= _array.reverse();
          setAray(reversed)
        }
    return(
        <div>
            <ul>
                {array.map((el) =>(
                    <li key={el}>{el}</li>
                    
                ))}
            </ul>
            <button onClick={
                ()=> setAray((prev)=>[ generate(),...prev])}>Ubaci</button>
            <button onClick={(recverseArr)}>Obrni je</button>
        </div>
    )
}

export default NewClass;