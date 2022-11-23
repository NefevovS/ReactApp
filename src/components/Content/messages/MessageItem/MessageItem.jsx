import React from "react";
import s from "./../Messages.module.css";

const MessageItem = (props) => {
  return <li className={s.messageItem}>{props.msg}</li>;
};

export default MessageItem;
