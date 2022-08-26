/*import React, { useCallback, useState } from "react";

const CryptoFrom =()=>{

    const cryptoList =[
        {id: 1, ime:'bitcoin', value: 20990},
        {id: 2, ime:'Dodgecoin', value: 1200},
        {id: 3, ime:'Eterium', value:100 },
        {id: 4, ime:'Solana', value: 1500},
        {id: 5, ime:'BabyBitcoin', value: 2300},
        {id: 6, ime:'SafeMooon', value: 500}
    ]
    //const[cryptoList, setCryptoList] = useState('')

    return(
        <div>
            <form>
                <input type='text'></input>
                <label ></label>
                <input type='number'></input>
                <label></label>
                <button type='button'>Add</button>
            </form>
        </div>
    )
}

export default CryptoFrom;*/

import React, { useState } from "react";
import "./CryptoForm.css";
import CryptoList from "../CryptoList/CryptoList";



const listOfCrypto = [
    { id: 0, name: "Bitcoin", value: 21355 },
    { id: 1, name: "Ethereum", value: 1650 },
    { id: 2, name: "Cardano", value: 0.465 },
    { id: 3, name: "Dogecoin", value: 0.071 },
    { id: 4, name: "Polkadot", value: 7.54 },
    { id: 5, name: "BNB", value: 291.39 },
    { id: 6, name: "Avalanche", value: 23.07 },
  ];
  
  const CryptoForm = () => {
    const [cryptoList, setCryptoList] = useState(listOfCrypto);
    
    const [userData, setUserData] = useState({
      name: "",
      value: "",
    });
  
    const onAddCrypto = (event) => {
      event.preventDefault();
     
      setCryptoList((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).slice(2, 7),
          name: userData.name,
          value: +userData.value,
        },
      ]);
      
      setUserData({
        name: "",
        value: "",
      });
    };
  
    const deleteCrypto = (id) => {
      const newCryptoList = cryptoList.filter((value) => value.id !== id);
      setCryptoList(newCryptoList);
    };
  
    return (
      <div>
        <form className="form">
          <label htmlFor="CryptoName"></label>
          <input
            type="text"
            name="CryptoName"
            id="CryptoName"
            placeholder="Crypto Name"
          
            value={userData.name}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
          ></input>
  
          <label htmlFor="CryptoValue"></label>
          <input
            type="number"
            name="CryptoValue"
            id="CryptoValue"
            placeholder="Crypto Value"
          
            value={userData.value}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                value: event.target.value,
              }))
            }
          ></input>
  
          <button className="btn1" type="submit" onClick={onAddCrypto}>
            ADD
          </button>
        </form>
  
        <h3 className="h3">Crypto List Items</h3>
  
        {cryptoList.map((value) => (
          <CryptoList
            key={value.id}
            name={value.name}
            value={value.value}
           
            deleteCrypto={() => deleteCrypto(value.id)}
          />
        ))}
      </div>
    );
  };
  
  export default CryptoForm;