import React from "react";

import MyPost from "./myposts/MyPost";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost posts={props.posts} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
