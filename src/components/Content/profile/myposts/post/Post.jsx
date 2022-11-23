import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.flexWrapper}>
        <img
          src="https://prikolnye-kartinki.ru/img/picture/Sep/27/77940614c8271e99f0454dbcbc465a27/5.jpg"
          className={s.imgSize}
          alt="img"
        ></img>
        <p>{props.message}</p>
      </div>
      <div className={s.likesBtn}>
        <p>{props.likesCount}</p>
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/512/20/20664.png"
            className={s.thumbUp}
            alt="img"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Post;
