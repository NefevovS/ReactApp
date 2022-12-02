let initialState = {
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
};
const avatarReducer = (state = initialState, action) => {
  return state;
};
export default avatarReducer;
