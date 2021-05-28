import {ADD_CHAT, ADD_MESSAGE, DELETE_CHAT} from "./actions";
import {AUTHORS} from "../../utils/consts";

const initialState = {
    chats: {
            "1": "Чат 1",
            "2": "Чат 2",
            "3": "Чат 3",
        },
    messages: {
        "1": {text: 'Привет, я робот', author: AUTHORS.ROBOT},
        "2": {text: 'Как твои дела?', author: AUTHORS.YOU},
        "3": {text: 'Мои хорошо', author: AUTHORS.ROBOT},
    },
    chatMessages: {
        "1": ["1", "2", "3"],
        "2": [],
        "3": [],
    }
};

const createIdx = (obj) => {
    return '' + (Math.max(0, ...(Object.keys(obj).map(k => Number(k)))) + 1);
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            const chatIdx = createIdx(state.chats);
            return {
                ...state,
                chats: {
                    ...state.chats,
                    ...{[chatIdx]: action.newChat},
                },
                chatMessages: {
                    ...state.chatMessages,
                    ...{[chatIdx]: []},
                }
            };
        }
        case DELETE_CHAT: {
            const {[action.chatIdx]: omitChat, ...chats} = state.chats;
            const {[action.chatIdx]: omitChatMessages, ...chatMessages} = state.chatMessages;
            return {
                ...state,
                chats: {
                    ...chats
                },
                chatMessages: {
                    ...chatMessages
                }
            };
        }
        case ADD_MESSAGE: {
            const messageIdx = createIdx(state.messages);
            return {
                ...state,
                messages: {
                    ...state.messages,
                    ...{[messageIdx]: action.newMessage}
                },
                chatMessages: {
                    ...state.chatMessages,
                    ...{[action.chatIdx]: [...state.chatMessages[action.chatIdx], messageIdx]}
                }
            };
        }
        default:
            return state;
    }
};
