import React from "react";
import s from "./profile.module.css";
import Newpost from "./newpost/Newpost";
import Post from "./post/Post";

const Profile = () => {
  return (
    <div className={s.container}>
      <div className={s.imgWrapper}>
        <img
          src="https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg"
          alt="img"
        ></img>
      </div>
      ava + description
      <Newpost />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Profile;
