import React, { useState } from "react";
//import AddNewCounter from "./components/Parent/Child/AddNewCounter";
//import Parent from "./components/Parent/Parent";
//import Reset from "./Reset";
import './App.css';
import CryptoFrom from "./components/Crypto/CryptoFrom/CryptoForm";
import CryptoList from "./components/Crypto/CryptoList/CryptoList";
import SestiCas from "./components/CetvrtiCas/SestiCas/SestiCas";
import Card1 from "./components/Temperature/Card1";
import PostItem from "./components/Post/PostList/PostList";
import PostList from "./components/Post/PostItem/PostItem";
//import NewClass from "./components/newClass";
//import TeamCard from "./components/Team/Team";

const App =()=>{

  return(
    <div>
      <PostItem/>
      <PostList/>
    </div>
  )
   
}

export default App;