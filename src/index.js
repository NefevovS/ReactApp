import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./components/redux/reduxStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
window.store = store;
let rerenderIntireTree = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};
rerenderIntireTree(store.getState()); // в первый раз отрисовываем state

store.subscribe(() => {
  let state = store.getState();
  rerenderIntireTree(state);
}); // отрисовываем после изменения state, передавая ссылку на rerenderIntireTree в приватную функцию _rerenderIntireTree из state.js

reportWebVitals();
