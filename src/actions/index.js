import axios from "axios";

export const ACTIVE_USERS_SHOWN = "active_users_shown";
export const UPDATE_ACTIVE_USERS = "update_active_users";

const HOST_NAME = "http://localhost";
const HOST_PORT = "8888";

const GET_ACTIVE_USERS = "users";

export function showActiveUsers(show) {
    return {
        type: ACTIVE_USERS_SHOWN,
        show: show
    };
}

export function updateActiveUsers() {
    return {
        type: UPDATE_ACTIVE_USERS,
        payload: axios.get(`${HOST_NAME}:${HOST_PORT}/${GET_ACTIVE_USERS}`)
    };
}
