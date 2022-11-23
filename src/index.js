import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const posts = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis voluptate debitis error maiores exercitationem consequuntur qui adipisci neque quidem labore iusto, fugiat, sit at ratione natus molestiae aperiam quod?",
    likesCount: 10,
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis voluptate debitis error maiores exercitationem consequuntur qui adipisci neque quidem labore iusto, fugiat, sit at ratione natus molestiae aperiam quod?",
    likesCount: 5,
  },
  {
    id: 3,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis voluptate debitis error maiores exercitationem consequuntur qui adipisci neque quidem labore iusto, fugiat, sit at ratione natus molestiae aperiam quod?",
    likesCount: 15,
  },
];
const allDialogs = [
  {
    name: "Sergey",
    id: 1,
  },
  {
    name: "Sveta",
    id: 2,
  },
  {
    name: "Natasha",
    id: 3,
  },
  {
    name: "Ivan",
    id: 4,
  },
  {
    name: "Igor",
    id: 5,
  },
  {
    name: "Alexander",
    id: 6,
  },
];
const allMessages = [
  {
    message: "How are you?",
    id: 1,
  },
  {
    message: "Ololo",
    id: 2,
  },
  {
    message: "Упячка",
    id: 3,
  },
  {
    message: "1243124",
    id: 4,
  },
  {
    message: "ыалдтдйлцд",
    id: 5,
  },
];
root.render(
  <React.StrictMode>
    <App posts={posts} allDialogs={allDialogs} allMessages={allMessages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
