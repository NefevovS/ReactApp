import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./components/redux/reduxStore";
import StoreContext from "./storeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

window.store = store;

let rerenderIntireTree = () => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

rerenderIntireTree(store.getState()); // в первый раз отрисовываем state

store.subscribe(() => rerenderIntireTree(store.getState())); // отрисовываем после изменения state, передавая ссылку на rerenderIntireTree в приватную функцию _rerenderIntireTree из state.js

reportWebVitals();
