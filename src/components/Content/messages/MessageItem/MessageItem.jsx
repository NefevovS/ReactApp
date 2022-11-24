import React from "react";
import s from "./../Messages.module.css";

const MessageItem = (props) => {
  debugger;
  return (
    <li
      className={
        props.imAuthor ? s.messageItem + " " + s.messageItemMy : s.messageItem
      }
    >
      {props.msg}
    </li>
  );
};

export default MessageItem;
