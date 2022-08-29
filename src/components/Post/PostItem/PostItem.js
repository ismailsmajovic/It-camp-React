import React, { useEffect, useState } from "react";
import PostItem from "../PostList/PostList";
import './PostItem.css'

const PostList = () => {
  const [data, setData] = useState([]);

  function getingData() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((el) => el.json())
      .then((prev) => setData(prev));
  }

  useEffect(() => {
    getingData();
  }, []);

  return (
    <div className="container">
      <p>
        {data.map((el) => {
          return <PostItem key={el.id} title={el.title} telo={el.telo} />;
        })}
      </p>
    </div>
  );
};

export default PostList;