import rerenderIntireTree from "./../../render";

let state = {
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
};

export let addMsg = (postMsg) => {
  let newpost = { id: 5, message: postMsg, likesCount: 0 };
  state.profile.posts.push(newpost);
  rerenderIntireTree(state);
  state.profile.newPostText = "";
};
export let addMessage = (newMessage) => {
  let msg = { imAuthor: true, message: newMessage, id: 10 };
  state.messages.allMessages.push(msg);
  rerenderIntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profile.newPostText = newText;
  console.log(state.profile.newPostText);
  rerenderIntireTree(state);
};
export default state;
