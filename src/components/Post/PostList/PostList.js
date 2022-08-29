import React from "react";
import './PostList.css'

const PostItem = ({ title, telo }) => {
  return (
    <div className="item">
      <h1> {title}</h1>
      <h2>Description: {telo}</h2>
    </div>
  );
};

export default PostItem;
