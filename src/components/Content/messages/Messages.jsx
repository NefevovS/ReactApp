import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Messages.module.css";

// ----------------ПРИХОДИТ С СЕРВЕРА--------------------------------

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
// ----------------ПРИХОДИТ С СЕРВЕРА--------------------------------

// ---------------------ОБЪЯВЛЯЕМ КОМПОНЕНТЫ
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
// ---------------------ОБЪЯВЛЯЕМ КОМПОНЕНТЫ

// ------------------ЗАПОЛНЯЕМ КОМПОНЕНТЫ ИНФОЙ ИЗ ОБЪЕКТА, ПОЛУЧЕННОГО С СЕРВЕРА

const drawDialogs = allDialogs.map((item) => (
  <DialogItem name={item.name} id={item.id} />
));

const drawMessages = allMessages.map((item) => (
  <MessageItem msg={item.message} />
));
// ------------------ЗАПОЛНЯЕМ КОМПОНЕНТЫ ИНФОЙ ИЗ ОБЪЕКТА, ПОЛУЧЕННОГО С СЕРВЕРА

// --------------------Объявляем общую компоненту и рисуем контент

const Messages = () => {
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
