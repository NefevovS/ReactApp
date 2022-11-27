import React from "react";
import s from "./newMessages.module.css";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    props.addMessage(text);
    newMessageElement.current.value = "";
  };

  let onPostChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  return (
    <div className={s.newPost}>
      <div className={s.postform}>
        <textarea
          type="textarea"
          ref={newMessageElement}
          rows="10"
          cols="50"
          value={props.newPostText}
          onChange={onPostChange}
        />
        <input
          type="button"
          onClick={addMessage}
          value={"Отправить"}
          className={s.btn}
        />
      </div>
    </div>
  );
};

export default NewMessage;
