import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={s.containerWide}>
        <div className={s.container}>контент шапки</div>
      </div>
    </div>
  );
};
export default Header;
