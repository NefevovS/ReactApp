import React from "react";
import Newpost from "./Newpost";
import {
  addMsgAction,
  updateNewPostTextAction,
} from "../../../../redux/profileReducer";
import StoreContext from "./../../../../../storeContext";

const NewpostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addPost = () => {
          store.dispatch(addMsgAction());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextAction(text));
        };

        return (
          <Newpost
            addPost={addPost}
            onPostChange={onPostChange}
            newPostText={store.getState().profile.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default NewpostContainer;
