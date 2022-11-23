import React from "react";
import s from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Messages = (props) => {
  const drawDialogs = props.allDialogs.map((item) => (
    <DialogItem name={item.name} id={item.id} />
  ));

  const drawMessages = props.allMessages.map((item) => (
    <MessageItem msg={item.message} />
  ));
  return (
    <div className={s.messages}>
      <div className={s.dialog}>
        <ul>{drawDialogs}</ul>
      </div>
      <div className={s.message}>
        <ul>{drawMessages}</ul>
      </div>
    </div>
  );
};

export default Messages;
