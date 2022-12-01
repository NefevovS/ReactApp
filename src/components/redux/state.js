import { profileReducer } from "./profileReducer";
import { messagesReducer } from "./messagesReducer";
import { avatarReducer } from "./avatarReducer";

let store = {
  _state: {
    profile: {
      posts: [
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
      ],
      newPostText: "",
    },
    messages: {
      allDialogs: [
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
      ],
      allMessages: [
        { imAuthor: true, message: "How are you?", id: 1 },
        { imAuthor: false, message: "Ololo", id: 2 },
        { imAuthor: false, message: "Упячка", id: 3 },
        { imAuthor: true, message: "1243124", id: 4 },
        { imAuthor: false, message: "ыалдтдйлцд", id: 5 },
      ],
      newMessage: "",
    },
    avatar: {
      friends: [
        {
          id: 1,
          name: "Sergey",
          avatarSrc: "https://cdn.freelance.ru/images/att/1575043_900_600.png",
        },
        {
          id: 2,
          name: "Maria",
          avatarSrc:
            "https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callsubscribe() {
    //ссылка на эту функцию меняется на ссылку observer(приходит rerenderIntireTree из index)
    //заглушка что бы компилилcя код
  },
  subscribe(observer) {
    this._callsubscribe = observer;
    //observer = rerenderIntireTree из index
  },
  dispatch(action) {
    profileReducer(store._state.profile, action);
    messagesReducer(store._state.messages, action);
    avatarReducer(store._state.avatar, action);
    this._callsubscribe(this._state);
  },
};
window.store = store;
export default store;

export const addMsgAction = () => ({ type: "addMsg" });
export const updateNewPostTextAction = (text) => ({
  type: "updateNewPostText",
  newText: text,
});
export const addMessageAction = () => ({ type: "addMessage" });
export const updateNewMessageTextAction = (text) => ({
  type: "updateNewMessageText",
  newText: text,
});
