import React from "react";
import s from "./Aside.module.css";
import { NavLink } from "react-router-dom";
import FriendsAvatars from "../FriendsAvatars/FriendsAvatars";

const Aside = (props) => {
  const drawFriendsAvatars = props.avatar.friends.map((item) => (
    <FriendsAvatars img={item.avatarSrc} name={item.name} />
  ));

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
            to="/music"
            className={(navData) => (navData.isActive ? s.active : s.a)}
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={(navData) => (navData.isActive ? s.active : s.a)}
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/friends"
            className={(navData) => (navData.isActive ? s.active : s.a)}
          >
            Friends
          </NavLink>
        </li>
        <div className={s.friendsAvatars}>{drawFriendsAvatars}</div>
      </ul>
    </div>
  );
};

export default Aside;
