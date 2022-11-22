import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Messages.module.css";

const allDialogs = [
  {
    name: "Sergey",
    id: 1,
  },
  {
    name: "Sveta",
    id: 2,
  },
  {
    name: "Natasha",
    id: 3,
  },
  {
    name: "Ivan",
    id: 4,
  },
  {
    name: "Igor",
    id: 5,
  },
  {
    name: "Alexander",
    id: 6,
  },
];
const allMessages = [
  {
    message: "How are you?",
    id: 1,
  },
  {
    message: "Ololo",
    id: 2,
  },
  {
    message: "Упячка",
    id: 3,
  },
  {
    message: "1243124",
    id: 4,
  },
  {
    message: "ыалдтдйлцд",
    id: 5,
  },
];

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
