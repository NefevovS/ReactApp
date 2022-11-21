import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Profile from "./components/Content/profile/Profile";
import Messages from "./components/Content/messages/Messages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="position">
          <Aside />
          <div className="app-wrapper">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
