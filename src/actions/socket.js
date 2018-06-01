import SockJS from "sockjs-client";
import Stomp from "@stomp/stompjs";

export const NEW_SOCKET_MSG = "new_socket_msg";

const HOST_NAME = process.env.REACT_APP_SERVER_NAME;
const HOST_PORT = process.env.REACT_APP_SERVER_PORT;

let stompClient = null;



export function setUpWebSocket(user) {
    stompClient = Stomp.over(()=>new SockJS(`http://${HOST_NAME}:${HOST_PORT}/ws`));
    stompClient.connect({}, () => {
        // Subscribe to the Public Topic
        stompClient.subscribe('/topic/public', (payload)=> onPublicMessageReceived(payload));
        console.log('subscribed to public');
        // stompClient.subscribe(`/topic/private/${senderId}`, onPrivateMessageReceived);
    });
}

export function onPublicMessageReceived(payload) {
    return {
        type: NEW_SOCKET_MSG,
        payload: payload
    }
}


export function sendMessage(message, user) {
    if (!stompClient)return;
    const messagePayload = {
        senderId: user.userId,
        content: message
    }
    stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(messagePayload));
}