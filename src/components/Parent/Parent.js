import React from "react";
import Reset from "../../Reset";
import Child from "./Child/Child";
import AddNewCounter  from './Child/AddNewCounter';


const Parent =({otacKlik})=>{
    // <button onClick={otacKlik}>Sin</button
    return(
        <div className="parent">
             <Reset />
            <AddNewCounter />
            <Child deteKlik={otacKlik} />
        </div>
    )
}

export default Parent;