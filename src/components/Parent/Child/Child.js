import React, { useState } from "react";
import Cukununuk from "./Cukununuk";
import Praunuk from "./Praunuk";

const Child =({deteKlik})=>{

    const [count, setCount]=useState(0);
   

    const handler =()=>{
        setCount( count - 1)
    }

    const handler2 =()=>{
        setCount(count + 1)
    }

    return(
        <div>
            <button onClick={deteKlik}>Unuk</button>
            <Praunuk unuceKlik={deteKlik} />
            <div>
                <button onClick={handler} disabled={count === 0}>-</button>
                {count}
                <button onClick={handler2} disabled={count >= 10}>+</button>
            </div>
            <Cukununuk />

        </div>
    )
}

export default Child;