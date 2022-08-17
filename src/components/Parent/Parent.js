import React from "react";
import Child from '../Parent/Child/Child.js'

const Parent =({otacKlik})=>{
    return(
        <div>
            <button onClick={otacKlik}>Sin</button>
            <Child deteKlik={otacKlik}/>
        </div>
    )
}

export default Parent;