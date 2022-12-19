import React from "react";
import s from "./newMessages.module.css";
import NewMessage from "./newMessage";

import {
  addMessageAction,
  updateNewMessageTextAction,
} from "../../../redux/messagesReducer";

const NewMessageContainer = (props) => {
  let addMessage = () => {
    props.dispatch(addMessageAction());
  };

  let onTextChange = (text) => {
    props.dispatch(updateNewMessageTextAction(text));
  };
  return (
    <NewMessage
      addMessage={addMessage}
      onTextChange={onTextChange}
      newMessage={props.newMessage}
    />
  );
};

export default NewMessageContainer;
