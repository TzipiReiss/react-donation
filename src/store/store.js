import { combineReducers } from "redux";
import { createStore } from "redux";
import donationReducer from "./donationStore";
import userReducer from "./userStore";
import itemReducer from "./itemStore";

const reducer = combineReducers({
    users: userReducer,
    items: itemReducer,
    donations: donationReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());