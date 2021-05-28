import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {chatsReducer} from "./chats/reducer";
import {profileReducer} from "./profile/reducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import {weatherReducer} from "./weather/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "react-geekbrains",
    storage,
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        weather: weatherReducer,
    })
);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
