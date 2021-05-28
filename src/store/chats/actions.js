export const ADD_CHAT = "CHATS::ADD_CHAT";
export const ADD_MESSAGE = "CHATS::ADD_MESSAGE";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    newChat,
});

export const addMessage = (newMessage, chatIdx) => ({
    type: ADD_MESSAGE,
    newMessage,
    chatIdx
});
