import React from "react";
import s from "./newMessages.module.css";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onTextChange = () => {
    let text = newMessageElement.current.value;
    props.onTextChange(text);
  };

  return (
    <div className={s.newPost}>
      <div className={s.postform}>
        <textarea
          type="textarea"
          ref={newMessageElement}
          rows="10"
          cols="50"
          value={props.newMessage}
          onChange={onTextChange}
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
