import React from "react";
import Post from "./post/Post";

import s from "./mypost.module.css";
import NewpostContainer from "./newpost/NewpostContainer";

const MyPost = (props) => {
  let drawPosts = props.profile.posts.map((item) => (
    <Post message={item.message} likesCount={item.likesCount} />
  ));
  return (
    <div>
      <h2 className={s.header}>My posts</h2>
      {drawPosts}
      <NewpostContainer
        newPostText={props.profile.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default MyPost;
