export const messagesReducer = (state, action) => {
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
