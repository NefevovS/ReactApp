let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addMessage":
      let msg = {
        imAuthor: true,
        message: state.newMessage,
        id: 10,
      };
      state.allMessages.push(msg);
      return state;
    case "updateNewMessageText":
      state.newMessage = action.newText;
      return state;
    default:
      return state;
  }
};
export const addMessageAction = () => ({ type: "addMessage" });
export const updateNewMessageTextAction = (text) => ({
  type: "updateNewMessageText",
  newText: text,
});
export default messagesReducer;
