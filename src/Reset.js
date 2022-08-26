import React, { useState } from "react";

const Reset =(counters)=>{
    const [reset, setReset]= useState(Number)

    const resetAll =()=>{
        setReset(counters.map((count)=> count === 0))
        console.log(reset)
    }
    
    return(
        <div className="reset">
            <button onClick={resetAll}>Reset ALL</button>
        </div>
    )

    }
export default Reset;