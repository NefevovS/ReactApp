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
                    dispatch={props.dispatch}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    posts={props.state.profile.posts}
                    dispatch={props.dispatch}
                  />
                }
              />
              <Route
                path="/messages/*"
                element={
                  <Messages
                    allDialogs={props.state.messages.allDialogs}
                    allMessages={props.state.messages.allMessages}
                    newMessage={props.state.messages.newMessage}
                    dispatch={props.dispatch}
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
