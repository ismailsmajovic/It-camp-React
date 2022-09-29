import React, { useEffect, useState } from "react";
//import AddNewCounter from "./components/Parent/Child/AddNewCounter";
//import Parent from "./components/Parent/Parent";
//import Reset from "./Reset";
import './App.css';
import CryptoFrom from "./components/Crypto/CryptoFrom/CryptoForm";
import CryptoList from "./components/Crypto/CryptoList/CryptoList";
import SestiCas from "./components/CetvrtiCas/SestiCas/SestiCas";
import Card1 from "./components/Temperature/Card1";
import PostItem from "./components/Postovi/PostList/PostList";
import PostList from "./components/Postovi/PostItem/PostItem";
import axios from "axios";
import Material from "./components/Material/Material";
import { Route, Router } from "react-router-dom"; 
//import NewClass from "./components/newClass";
//import TeamCard from "./components/Team/Team";

export default function App() {
  
  return(
    <div className="">
      <h1>Welcome to React Router</h1>
      <Routers>
        <Route path="/"></Route>
        <Route path="about"></Route>
      </Routers>
    </div>
  )
  
  
  
  /*



  <Material/>

  const BASE_URL = "https://api.quotable.io"; 
  
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
 
  function getAuthors(page) {
    setLoading(true);
    try {
      axios
        .get(`${BASE_URL}/authors?sortBy=quoteCount&page=${page}&limit=15`)
        .then((res) => {
          console.log(res.data);
          setPagination({
            page: res.data.page,
            lastPage: res.data.totalPages,
          });
          setAuthors(res.data.results);
        });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
 
  useEffect(() => {
    getAuthors(page);
  }, [page]);
 
  return (
    <div className="card-container">
      Page {pagination.page} / {pagination.lastPage}
      <button onClick={() => setPage((prev) => prev + 1)}>Next page </button>
      {!loading ? (
        <div>
          {authors.map((author) => (
            <div key={author._id}>
              <h4>{author.name}</h4>
              <h5>{author.description}</h5>
              <p>{author.bio}</p>
              <p>Quoute count: {author.quoteCount}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );*/
}
 