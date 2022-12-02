let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
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
//action функции
export const addMsgAction = () => ({ type: "addMsg" });
export const updateNewPostTextAction = (text) => ({
  type: "updateNewPostText",
  newText: text,
});

export default profileReducer;
