import React from "react";
import s from "../profileInfo/profileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.container}>
      <div className={s.imgWrapper}>
        <img
          src="https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg"
          alt="img"
        ></img>
      </div>
      <div className={s.description}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
