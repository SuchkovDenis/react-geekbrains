import React, {useEffect} from "react";
import {MessageComponent} from "../Message";
import {AUTHORS} from "../../utils/consts";
import {MessageForm} from "../MessageForm";

export const MessageField = (props) => {

    const messageList = Object.values(props.messages);

    const handleAddMessage = (message) => {
        props.handleAddMessage(message, props.chatId);
    }

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author === AUTHORS.YOU) {
            handleAddMessage({text: 'Привет из чата ' + props.chatId, author: AUTHORS.ROBOT});
        }
    });

    return (
        <>
        { props.chatId >= 0 &&
            <div>
                {messageList.map(message => <MessageComponent props={message}/>)}
                <MessageForm onSubmit = {handleAddMessage}/>
            </div>
        }
        </>
    );
}
