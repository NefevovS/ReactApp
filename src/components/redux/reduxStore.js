import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import avatarReducer from "./avatarReducer";

let reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  avatar: avatarReducer,
});

let store = createStore(reducers);

export default store;
