import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import reducerActiveUsers from "./reducerActiveUsers";

const rootReducer = combineReducers({
    user: reducerUser,
    activeUsers: reducerActiveUsers
});

export default rootReducer;
