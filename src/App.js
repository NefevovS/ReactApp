import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Profile from "./components/Content/profile/Profile";
import Messages from "./components/Content/messages/Messages";
import FriendsAvatars from "./components/FriendsAvatars/FriendsAvatars";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="position">
          <Aside />
          <FriendsAvatars />
          <div className="app-wrapper">
            <Routes>
              <Route
                path="/profile"
                element={<Profile posts={props.state.profile.posts} />}
              />
              <Route
                path="/messages/*"
                element={
                  <Messages
                    allDialogs={props.state.messages.allDialogs}
                    allMessages={props.state.messages.allMessages}
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
