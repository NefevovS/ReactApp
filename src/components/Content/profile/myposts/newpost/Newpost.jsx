import React from "react";
import s from "./Newpost.module.css";

const Newpost = () => {
  return (
    <div className={s.newPost}>
      <form>
        <textarea type="textarea" rows="10" cols="50" />
        <input type="submit" className={s.submit} />
      </form>
    </div>
  );
};

export default Newpost;
