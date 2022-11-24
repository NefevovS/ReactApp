import React from "react";
import s from "./../Messages.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li>
      <NavLink
        to={"/messages/" + props.id}
        className={(navData) => (navData.isActive ? s.active : s.dialogItem)}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
