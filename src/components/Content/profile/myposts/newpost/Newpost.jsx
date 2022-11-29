import React from "react";
import s from "./Newpost.module.css";

const Newpost = (props) => {
  let newPostElement = React.createRef();
  // dispatch={props.dispatch}
  let addPost = () => {
    props.dispatch({ type: "addMsg" });
    newPostElement.current.value = "";
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "updateNewPostText", newText: text });
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
