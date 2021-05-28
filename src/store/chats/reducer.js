import {ADD_CHAT, ADD_MESSAGE} from "./actions";
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
    return '' + (Object.values(obj).length + 1);
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
