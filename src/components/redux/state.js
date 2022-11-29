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
  _rerenderIntireTree() {
    console.log("ссылка на эту функцию меняется на ссылку observer");
  },
  subscribe(observer) {
    this._rerenderIntireTree = observer;
  },
  dispatch(action) {
    if (action.type === "addMsg") {
      let newpost = {
        id: 5,
        message: store._state.profile.newPostText,
        likesCount: 0,
      };
      this._state.profile.posts.push(newpost);
      this._rerenderIntireTree(this._state);
      this._state.profile.newPostText = "";
    } else if (action.type === "updateNewPostText") {
      this._state.profile.newPostText = action.newText;
      this._rerenderIntireTree(this._state);
    }
    // else if(action.type===""){}
    // else if(action.type===""){}
  },

  addMessage() {
    let msg = {
      imAuthor: true,
      message: store._state.messages.newMessage,
      id: 10,
    };
    this._state.messages.allMessages.push(msg);
    this._rerenderIntireTree(this._state);
  },
  updateNewMessageText(newText) {
    this._state.messages.newMessage = newText;
    this._rerenderIntireTree(this._state);
  },
};

export default store;
