import React from "react";
import Post from "./post/Post";
import Newpost from "./newpost/Newpost";
import s from "./mypost.module.css";

const MyPost = () => {
  return (
    <div>
      <h2>My posts</h2>
      <Newpost />
      <Post />
    </div>
  );
};

export default MyPost;
