import { SHOW_ACTIVE_USERS } from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case SHOW_ACTIVE_USERS:
            return (({ show, activeUsers }) => ({ show, activeUsers }))(action);
    }
    return state;
};
