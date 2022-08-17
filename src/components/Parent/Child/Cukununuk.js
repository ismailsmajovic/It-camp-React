import React, { useState } from "react";

const Cukununuk =(props)=>{

   const [reset, setreset] =useState(0);

   const resetFoo =()=>{
        //setreset(props.count === 0);
        alert('reset ne radi')
   }

    return(
        <div>
            <button onClick={resetFoo} >Reset</button>
        </div>
    )
}
export default Cukununuk;