import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.flexWrapper}>
        <img
          src="https://prikolnye-kartinki.ru/img/picture/Sep/27/77940614c8271e99f0454dbcbc465a27/5.jpg"
          className={s.imgSize}
          alt="img"
        ></img>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          blanditiis voluptate debitis error maiores exercitationem consequuntur
          qui adipisci neque quidem labore iusto, fugiat, sit at ratione natus
          molestiae aperiam quod?
        </p>
      </div>

      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/20/20664.png"
          className={s.thumbUp}
          alt="img"
        ></img>
      </button>
    </div>
  );
};

export default Post;
