import React, { useState } from "react";
import './Card1.css';
import Description from "./Description";

const listDescription =
        [{id:1, message: 'hladno je cuvajte se'},
        {id:2, message:'ne izlazite na Sunce'}
    ]
    

    const Card1 =({
    })=>{

        const [temperature, setTemperature]= useState(0);
        const[description, setDescription]=useState('');

        const ifTemp =()=>{
           //const newDescription =description.filter((value)=> )
        }

        const onChangeTemp=()=>{
        // const newTemp = (Math.random() *20).toFixed(0)
        const newTemp= Math.floor(Math.random() * (40 - (-30)) + (-30))
            setTemperature(newTemp);
            //console.log(temperature)
            /*if (newTemp < 0 ) {
                return(className='')
            }*/
        }



    return(
    <div className="conteiner">
        <div className="card">
            <p className="temperatura">{temperature}</p>
            <button 
            onClick={onChangeTemp}
            className='btn'
            >Change temp</button>
        </div>
        {listDescription.map((value)=> (
        <Description
        key={value.id}
        message={value.message}
        ifTemp={()=> ifTemp(value.id)}
        />))}
    </div>
    )
}

export default Card1;