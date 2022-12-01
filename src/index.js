import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./components/redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderIntireTree = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};
rerenderIntireTree(store._state); // в первый раз отрисовываем state

store.subscribe(rerenderIntireTree); // отрисовываем после изменения state, передавая ссылку на rerenderIntireTree в приватную функцию _rerenderIntireTree из state.js

reportWebVitals();
