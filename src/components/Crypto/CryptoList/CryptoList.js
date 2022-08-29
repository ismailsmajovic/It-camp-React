/*import React from "react";
import './CryptoList.css'

const CryptoList = ()=>{
    return(
        <div className="conteiner">
            <h1>Ime valute</h1>
            <p>Cena</p>
            <button>X</button>
        <div className="lista">

            
        </div>
        </div>
    )
}

export default CryptoList;*/
import React from "react";
import './CryptoList.css'


const CryptoList = ({
    name,
    value,
    deleteCrypto,
    
  }) => {
    return(
      <div className=".crypto-list">
        <div className=".crypto-list-item">
          <p>{name}</p>
          <p>{value}</p>
          <button
          className="btn2"
          onClick={deleteCrypto}>X</button>
        </div>
      </div>
    )
   
  };
  
  export default CryptoList;




































  /* 
   return (
      <div className="crypto-list">
        <div className="crypto-list-item">
          <p>{name}</p>
          <p>$ {value}</p>
          <button className="btn2" onClick={deleteCrypto}>
            X
          </button>
        </div>
      </div>
    );
  */