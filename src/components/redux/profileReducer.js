export const profileReducer = (state, action) => {
  switch (action.type) {
    case "addMsg":
      let newpost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newpost);
      state.newPostText = "";
      return state;
    case "updateNewPostText":
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addMsgAction = () => ({ type: "addMsg" });
export const updateNewPostTextAction = (text) => ({
  type: "updateNewPostText",
  newText: text,
});
