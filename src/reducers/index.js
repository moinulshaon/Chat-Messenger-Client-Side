import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import reducerActiveUsers from "./reducerActiveUsers";
import reducerMessages from "./reducerMessages";

const rootReducer = combineReducers({
    user: reducerUser,
    activeUsers: reducerActiveUsers,
    messages: reducerMessages
});

export default rootReducer;
