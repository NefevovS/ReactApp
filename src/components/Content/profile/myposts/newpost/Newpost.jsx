import React from "react";
import s from "./Newpost.module.css";

import {
  addMsgAction,
  updateNewPostTextAction,
} from "./../../../../redux/profileReducer";

const Newpost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addMsgAction());
    newPostElement.current.value = "";
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextAction(text));
  };

  return (
    <div className={s.newPost}>
      <div className={s.postform}>
        <textarea
          type="textarea"
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        />
        <input
          type="button"
          value={"Отправить"}
          className={s.btn}
          onClick={addPost}
        />
      </div>
    </div>
  );
};

export default Newpost;
