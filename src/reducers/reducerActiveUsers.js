import { UPDATE_ACTIVE_USERS } from "../actions";

export default function(state = null, action) {
    switch (action.type) {
        case UPDATE_ACTIVE_USERS:
            return action.payload.data;
        default:
            return state;
    }
}
