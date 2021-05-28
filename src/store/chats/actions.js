import {AUTHORS} from "../../utils/consts";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const ADD_MESSAGE = "CHATS::ADD_MESSAGE";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    newChat,
});

export const deleteChat = (chatIdx) => ({
    type: DELETE_CHAT,
    chatIdx,
});

export const addMessage = (newMessage, chatIdx) => ({
    type: ADD_MESSAGE,
    newMessage,
    chatIdx
});

let timeout;

export const addMessageWithThunk = (newMessage, chatIdx) => (dispatch, ) => {
    dispatch(addMessage(newMessage, chatIdx));

    if (newMessage.author !== AUTHORS.ROBOT) {
        timeout = setTimeout(() => {
            dispatch(addMessage({ text: "Привет от робота", author: AUTHORS.ROBOT }, chatIdx));
        }, 1000);
    }
};
