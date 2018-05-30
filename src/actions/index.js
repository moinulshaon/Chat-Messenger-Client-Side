import axios from "axios";

export const UPDATE_ACTIVE_USERS = "update_active_users";
export const SET_USER = "set_user";

const HOST_NAME = "http://localhost";
const HOST_PORT = "8888";

const GET_ACTIVE_USERS = "users";

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    };
}

export function updateActiveUsers() {
    return {
        type: UPDATE_ACTIVE_USERS,
        payload: {data:[{userId: '1', userName: 'shaon'},{userId: '2', userName: 'moinul'}]}
        // payload: axios.get(`${HOST_NAME}:${HOST_PORT}/${GET_ACTIVE_USERS}`)
    };
}
