import React from "react";
import './Team.css'

const Team =({name, points})=>{
    return(
        <div>
            <p>Ime</p>
            <p>{points}pt</p>
            <button>X</button>
        </div>
    )
}

export default Team;