import React from "react";

const Title=(clickHandler)=>{
    return(
        <h3 className="neka-klasa h3" onClick={clickHandler}>
        {/* pozivanje funkcije iz grandfather componente - Props drilling*/}
        {/* Zdravo {name}, imas {age} godina. */}
        Zdravo
      </h3>
    )
}
export default Title;