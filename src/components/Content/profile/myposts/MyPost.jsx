import React from "react";
import Post from "./post/Post";
import Newpost from "./newpost/Newpost";
import s from "./mypost.module.css";

const MyPost = (props) => {
  let drawPosts = props.posts.map((item) => (
    <Post message={item.message} likesCount={item.likesCount} />
  ));
  return (
    <div>
      <h2 className={s.header}>My posts</h2>
      {drawPosts}

      <Newpost addMsg={props.addMsg} />
    </div>
  );
};

export default MyPost;
