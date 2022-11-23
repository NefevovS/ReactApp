import React from "react";
import s from "./../Messages.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className={s.dialogItem + " " + s.active}>
      <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
    </li>
  );
};

export default DialogItem;
