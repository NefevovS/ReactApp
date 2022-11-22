import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Messages.module.css";

const DialogItem = (props) => {
  return (
    <li className={s.dialogItem + " " + s.active}>
      <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
    </li>
  );
};

const MessageItem = (props) => {
  return <li className={s.messageItem}>{props.msg}</li>;
};

const Messages = () => {
  return (
    <div className={s.messages}>
      <div className={s.dialog}>
        <ul>
          <DialogItem name="Sergey" id="1" />
          <DialogItem name="Sveta" id="2" />
          <DialogItem name="Natasha" id="3" />
          <DialogItem name="Ivan" id="4" />
          <DialogItem name="Igor" id="5" />
          <DialogItem name="Alexander" id="6" />
        </ul>
      </div>
      <div className={s.message}>
        <ul>
          <MessageItem msg="Hi" />
          <MessageItem msg="How are you?" />
          <MessageItem msg="Ololo" />
          <MessageItem msg="Упячка" />
          <MessageItem msg="1243124" />
          <MessageItem msg="ыалдтдйлцд" />
        </ul>
      </div>
    </div>
  );
};

export default Messages;
