import React from "react";
import s from "./Newpost.module.css";

const Newpost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addMsg(text);
    newPostElement.current.value = "";
  };

  return (
    <div className={s.newPost}>
      <div className={s.postform}>
        <textarea type="textarea" ref={newPostElement} />
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
