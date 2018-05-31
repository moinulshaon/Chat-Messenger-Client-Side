import axios from "axios";
import SockJS from "sockjs-client";
import Stomp from "@stomp/stompjs";

export const UPDATE_ACTIVE_USERS = "update_active_users";
export const SET_USER = "set_user";

const HOST_NAME = process.env.REACT_APP_SERVER_NAME;
const HOST_PORT = process.env.REACT_APP_SERVER_PORT;

const GET_ACTIVE_USERS = "users";

let stompClient = null;

export function setUpWebSocket(user) {
    stompClient = Stomp.over(()=>new SockJS(`http://${HOST_NAME}:${HOST_PORT}/ws`));
    stompClient.connect({}, () => {
        // Subscribe to the Public Topic
        stompClient.subscribe('/topic/public', onPublicMessageReceived);
        console.log('subscribed to public');
        // stompClient.subscribe(`/topic/private/${senderId}`, onPrivateMessageReceived);
    });
}

function onPublicMessageReceived(payload) {
    console.log('message received', payload);
}

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    };
}

export function updateActiveUsers() {
    return {
        type: UPDATE_ACTIVE_USERS,
        // payload: {data:[{userId: '1', userName: 'shaon'},{userId: '2', userName: 'moinul'}]}
        payload: axios.get(`http://${HOST_NAME}:${HOST_PORT}/${GET_ACTIVE_USERS}`)
    };
}
