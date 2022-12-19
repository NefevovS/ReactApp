import React from "react";
import Newpost from "./Newpost";

import {
  addMsgAction,
  updateNewPostTextAction,
} from "../../../../redux/profileReducer";

const NewpostContainer = (props) => {
  let addPost = () => {
    props.dispatch(addMsgAction());
  };

  let onPostChange = (text) => {
    props.dispatch(updateNewPostTextAction(text));
  };

  return (
    <Newpost
      addPost={addPost}
      onPostChange={onPostChange}
      newPostText={props.newPostText}
    />
  );
};

export default NewpostContainer;
