import React, {useEffect} from "react";
import {MessageComponent} from "../Message";
import {AUTHORS} from "../../utils/consts";
import {MessageForm} from "../MessageForm";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../store/chats/actions";

export const MessageField = ({chatId}) => {

    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chats.messages);
    const chatMessages = useSelector((state) => state.chats.chatMessages);
    const relatedMessages = Object.values(
            Object.keys(messages)
            .filter(key => (chatMessages[chatId] || []).includes(key))
            .reduce((obj, key) => {return {...obj, [key]: messages[key]}}, {}));

    const handleAddMessage = (message) => {
        dispatch(addMessage(message, chatId));
    }

    useEffect(() => {
        if (relatedMessages.length > 0 && relatedMessages[relatedMessages.length - 1].author === AUTHORS.YOU) {
            handleAddMessage({text: 'Привет из чата ' + chatId, author: AUTHORS.ROBOT});
        }
    });

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
