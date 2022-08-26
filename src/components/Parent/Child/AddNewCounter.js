/*import React, { useState } from "react";

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
export default Cukununuk;*/

import React, { useState } from "react";
import Child from "./Child";

const Cukununuk =()=>{
    const[counters, setCounters] = useState([])

    return(
        <div className="add-new">
              
         <button onClick={()=> setCounters([...counters, <Child />]) }>Add new Counter</button>
         {counters}
    
        </div>
    )
}

export default Cukununuk;