import React from "react";
import s from "./profile.module.css";
import MyPost from "./myposts/MyPost";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPost />
    </div>
  );
};

export default Profile;
