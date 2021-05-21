import React, {useState} from "react";
import {ChatList} from "../ChatList";
import {Card, CardContent, Grid, Paper} from '@material-ui/core';
import {MessageField} from "../MessageField";

export const Chat = (props) => {
    const [messages, setMessages] = useState({});
    const [chatMessages, setChatMessages] = useState({});
    const [chats, setChats] = useState({});

    const handleAddChat = (title) => {
        const chatId = createIdx(chats);
        setChats({...chats, ...{[chatId]: title}});
    }

    const handleAddMessage = (message, chatId) => {
        const messageId = createIdx(messages);
        setMessages({...messages, ...{[messageId]: message}});

        const messagesOfChat = chatMessages[chatId] || [];
        setChatMessages({...chatMessages, [chatId]: [...messagesOfChat, messageId]});
    }

    const relatedMessages = (chatId) => {
        const allowed = chatMessages[chatId] || [];

        return Object.keys(messages)
            .filter(key => allowed.includes(key))
            .reduce((obj, key) => {return {...obj, [key]: messages[key]}}, {});
    }

    const createIdx = (obj) => {
        return '' + (Object.values(obj).length + 1);
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper>
                        <ChatList
                            handleAddChat = {handleAddChat}
                            chats = {chats}/>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <MessageField
                                messages = {relatedMessages(props.chatId)}
                                handleAddMessage = {handleAddMessage} 
                                chatId = {props.chatId}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
