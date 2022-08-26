//import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
//import AddNewCounter from "./AddNewCounter";
//import Cukununuk from "./Cukununuk";
//import Praunuk from "./Praunuk";
//import ResetAll from "./ResetAll";


    const Child =()=>{

        const [count, setCount]=useState(0);
    

        const handler =()=>{
            setCount( count - 1)
        }

        const handler2 =()=>{
            setCount(count + 1)
        }

    /*const resetFoo=()=>{
        setCount(0)
    }*/
   

    // <Reset resetKlik={resetFoo}/>

    //  <button onClick={deteKlik}>Unuk</button>
    //<Praunuk unuceKlik={deteKlik} />

    //<div>
    
    return(
        <div >
           
            <div className="child">
                <button onClick={handler} disabled={count === 0} /*</div>style={this.buttonStilers}*/>-</button>
                {count}
                <button onClick={handler2} disabled={count >= 10}>+</button>
            </div>
            <div>
                <button className="reset-dugme" onClick={()=> setCount(0)}>Reset</button>
            </div>

        </div>
    )
}

export default Child;