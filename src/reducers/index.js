import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import showActiveUsers from "./reducerShowActiveUsers";

const rootReducer = combineReducers({
    user: reducerUser,
    showActiveUsers: showActiveUsers
});

export default rootReducer;
