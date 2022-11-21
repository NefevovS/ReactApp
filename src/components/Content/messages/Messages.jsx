import React from "react";
import s from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={s.messages}>
      <div className={s.dialog}>
        <ul>
          <li className={s.dialogItem + " " + s.active}>Sergey</li>
          <li className={s.dialogItem}>Fedor</li>
          <li className={s.dialogItem}>Ivan</li>
          <li className={s.dialogItem}>Sveta</li>
          <li className={s.dialogItem}>Natasha</li>
          <li className={s.dialogItem}>Igor</li>
        </ul>
      </div>
      <div className={s.message}>
        <ul>
          <li className={s.messageItem}>Hi</li>
          <li className={s.messageItem}>How are you?</li>
          <li className={s.messageItem}>Ololo</li>
          <li className={s.messageItem}>Упячка</li>
          <li className={s.messageItem}>1243124</li>
          <li className={s.messageItem}>ыалдтдйлцд</li>
        </ul>
      </div>
    </div>
  );
};

export default Messages;
