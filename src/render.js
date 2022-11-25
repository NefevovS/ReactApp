import {
  addMsg,
  addMessage,
  updateNewPostText,
} from "./components/redux/state";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderIntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addMsg={addMsg}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>
  );
};

export default rerenderIntireTree;
