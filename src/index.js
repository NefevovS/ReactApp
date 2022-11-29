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
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>
  );
};
rerenderIntireTree(store._state);
store.subscribe(rerenderIntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
