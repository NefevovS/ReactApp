import React from "react";
import s from "./Aside.module.css";
import { NavLink } from "react-router-dom";
import FriendsAvatars from "../FriendsAvatars/FriendsAvatars";

const Aside = () => {
  return (
    <div className={s.container}>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? s.active : s.a)}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={(navData) => (navData.isActive ? s.active : s.a)}
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={(navData) => (navData.isActive ? s.active : s.a)}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Music"
            className={(navData) => (navData.isActive ? s.active : s.a)}
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Settings"
            className={(navData) => (navData.isActive ? s.active : s.a)}
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Friends"
            className={(navData) => (navData.isActive ? s.active : s.a)}
          >
            Friends
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
