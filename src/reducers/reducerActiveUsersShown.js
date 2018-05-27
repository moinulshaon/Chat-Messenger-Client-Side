import { ACTIVE_USERS_SHOWN } from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case ACTIVE_USERS_SHOWN:
            return action.show;
        default:
            return state;
    }
};
