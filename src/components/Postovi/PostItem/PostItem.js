import React, { useEffect, useState } from "react";
import PostItem from "../PostList/PostList";
import './PostItem.css'

const PostList = () => {
  const [data, setData] = useState([]);
 
  function getingData() {
    fetch(`https://jsonplaceholder.typicode.co m/posts`)
      .then((el) => el.json())
      .then((prev) => setData(prev));
  }

  useEffect(() => {
    getingData();
  }, []);

  return (
    <div className="container">
      <div>
        {data.map((el) => {
          return <PostItem key={el.id} title={el.title} telo={el.telo} />;
        })}
      </div>
    </div>
  );
};

export default PostList;