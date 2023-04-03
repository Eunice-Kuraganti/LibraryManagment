import React from "react";
import "./Post.css";
const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
  return (  
    <div className="post">
      <h1 className="heading">{title}</h1>
      <img className="image" src={imgUrl} alt="post" />
      <p><h3>{body}</h3></p>
      <div className="info">      
        <h4>Written by: {author}</h4>
      </div>
    </div>
  );
};
  
export default Post;