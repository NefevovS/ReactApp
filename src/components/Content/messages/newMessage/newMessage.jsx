import React from "react";
import s from "./Messages.module.css";

const NewMessage = () => {
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
  };
  return (
    <div className={s.newPost}>
      <form>
        <textarea type="textarea" ref={newMessageElement} rows="10" cols="50" />
        <input type="submit" onClick={addMessage} className={s.submit} />
      </form>
    </div>
  );
};

export default NewMessage;
