import React from "react";
import s from "./newMessages.module.css";
import {
  addMessageAction,
  updateNewMessageTextAction,
} from "./../../../redux/state";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();
  let addMessage = () => {
    props.dispatch(addMessageAction());
    newMessageElement.current.value = "";
  };

  let onPostChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextAction(text));
  };
  return (
    <div className={s.newPost}>
      <div className={s.postform}>
        <textarea
          type="textarea"
          ref={newMessageElement}
          rows="10"
          cols="50"
          value={props.NewMessage}
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
