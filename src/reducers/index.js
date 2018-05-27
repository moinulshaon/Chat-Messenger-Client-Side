import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import reducerActiveUsersShown from "./reducerActiveUsersShown";
import reducerActiveUsers from "./reducerActiveUsers";

const rootReducer = combineReducers({
    user: reducerUser,
    activeUsersShown: reducerActiveUsersShown,
    activeUsers: reducerActiveUsers
});

export default rootReducer;
