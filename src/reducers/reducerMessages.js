import { NEW_SOCKET_MSG } from "../actions";

export default function(state = [], action) {
    switch (action.type) {
        case NEW_SOCKET_MSG:
            return [...state, JSON.parse(action.payload.body)];
        default:
            return state;
    }
}
