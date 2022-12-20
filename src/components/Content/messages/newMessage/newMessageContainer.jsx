import React from "react";
import s from "./newMessages.module.css";
import NewMessage from "./newMessage";
import StoreContext from "./../../../../storeContext";
import {
  addMessageAction,
  updateNewMessageTextAction,
} from "../../../redux/messagesReducer";

const NewMessageContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addMessage = () => {
          store.dispatch(addMessageAction());
        };

        let onTextChange = (text) => {
          store.dispatch(updateNewMessageTextAction(text));
        };

        return (
          <NewMessage
            addMessage={addMessage}
            onTextChange={onTextChange}
            newMessage={store.getState().messages.newMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default NewMessageContainer;
