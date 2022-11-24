import React from "react";

const FriendsAvatars = (props) => {
  return (
    <div>
      <img src={props.img} alt="avatar" />
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default FriendsAvatars;
