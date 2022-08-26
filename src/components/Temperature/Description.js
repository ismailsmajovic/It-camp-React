import React from "react";

const Description =({
    description,
    message
})=>{
    return(
        <div>
            <div className="Deskripcija">
            <p>{description}</p>
            <h2>{message}</h2>
            </div>
        </div>
    )
}

export default Description;