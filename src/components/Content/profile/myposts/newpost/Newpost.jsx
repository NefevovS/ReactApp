import React from "react";
import s from "./Newpost.module.css";

const Newpost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
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
