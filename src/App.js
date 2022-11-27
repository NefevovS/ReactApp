import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Profile from "./components/Content/profile/Profile";
import Messages from "./components/Content/messages/Messages";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="position">
          <Aside avatar={props.state.avatar} />

          <div className="app-wrapper">
            <Routes>
              <Route
                path="/"
                element={
                  <Profile
                    posts={props.state.profile.posts}
                    addMsg={props.addMsg}
                    updateNewPostText={props.updateNewPostText}
                    newPostText={props.state.profile.newPostText}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    posts={props.state.profile.posts}
                    addMsg={props.addMsg}
                    updateNewPostText={props.updateNewPostText}
                    newPostText={props.state.profile.newPostText}
                  />
                }
              />
              <Route
                path="/messages/*"
                element={
                  <Messages
                    addMessage={props.addMessage}
                    allDialogs={props.state.messages.allDialogs}
                    allMessages={props.state.messages.allMessages}
                    updateNewMessageText={props.updateNewMessageText}
                    newPostText={props.state.messages.newPostText}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
