import React, { useState } from "react";
import '../incrementer/Increment.css'

const Incrementer =()=>{

    const [count, setCount]= useState(0)

    const handclick =()=>{
        setCount(count -1)
    }

    const handclick2 =()=>{
        setCount(count +1)
    }

    //onClick={ setCount((count)=> count + 1)}
    return(
    <div className="conteiner">
        <button onClick={handclick} disabled={count === 0} className='buttons'>-</button>
        <p>{count}</p>
        <button onClick={handclick2} className='buttons'>+</button>
    </div>)
}

export default Incrementer;