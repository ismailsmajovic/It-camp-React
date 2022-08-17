import React from "react";
import Parent from "./components/Parent/Parent";

const App =()=>{
    const rucniklik =()=>{
        alert('funkcija iz App')
    }

    return(
        <div>
            <button onClick={rucniklik}>App</button>
            <Parent otacKlik={rucniklik}/>
        </div>
    )
}

export default App;