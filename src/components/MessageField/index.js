import React, {useCallback} from "react";
import {MessageComponent} from "../Message";
import {MessageForm} from "../MessageForm";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithThunk} from "../../store/chats/actions";
import {useParams} from "react-router-dom";

export const MessageField = () => {

    const { chatId } = useParams();

    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chats.messages);
    const chatMessages = useSelector((state) => state.chats.chatMessages);
    const relatedMessages = Object.values(
            Object.keys(messages)
            .filter(key => (chatMessages[chatId] || []).includes(key))
            .reduce((obj, key) => {return {...obj, [key]: messages[key]}}, {}));

    const handleAddMessage = useCallback(
        (newMessage) => {
            dispatch(addMessageWithThunk(newMessage, chatId));
        },
        [chatId, dispatch]
    );

    return (
        <>
        { chatId >= 0 &&
            <div>
                {relatedMessages.map(message => <MessageComponent props={message}/>)}
                <MessageForm onSubmit = {handleAddMessage}/>
            </div>
        }
        </>
    );
}
