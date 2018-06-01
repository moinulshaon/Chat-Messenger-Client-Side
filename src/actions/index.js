import axios from "axios";

export const UPDATE_ACTIVE_USERS = "update_active_users";
export const SET_USER = "set_user";


const HOST_NAME = process.env.REACT_APP_SERVER_NAME;
const HOST_PORT = process.env.REACT_APP_SERVER_PORT;

const GET_ACTIVE_USERS = "users";

export function setUser(user) {
    return {
        type: SET_USER,
        payload: axios.put(`http://${HOST_NAME}:${HOST_PORT}/${GET_ACTIVE_USERS}`, {
            userName: user
        })
    };
}

export function updateActiveUsers() {
    return {
        type: UPDATE_ACTIVE_USERS,
        // payload: {data:[{userId: '1', userName: 'shaon'},{userId: '2', userName: 'moinul'}]}
        payload: axios.get(`http://${HOST_NAME}:${HOST_PORT}/${GET_ACTIVE_USERS}`)
    };
}
