import React from "react";
import s from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import NewMessageContainer from "./newMessage/newMessageContainer";

const Messages = (props) => {
  const drawDialogs = props.messages.allDialogs.map((item) => (
    <DialogItem name={item.name} id={item.id} />
  ));

  const drawMessages = props.messages.allMessages.map((item) => (
    <MessageItem msg={item.message} imAuthor={item.imAuthor} />
  ));
  return (
    <div className={s.messages}>
      <div className={s.dialog}>
        <ul>{drawDialogs}</ul>
      </div>
      <div className={s.message}>
        <ul>{drawMessages}</ul>
        <NewMessageContainer />
      </div>
    </div>
  );
};

export default Messages;
