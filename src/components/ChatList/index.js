import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import {AddChatForm} from './../AddChatForm';
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const ChatList = () => {
    const classes = useStyles();
    const chatList = useSelector((state) => state.chats.chats);

    return (
        <List className={classes.root}>
            {Object.keys(chatList).map((key) =>
                <Link to={`/chat/${key}/`}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={chatList[key]} secondary="Чат" />
                    </ListItem>
                </Link>
            )}
            <AddChatForm/>
        </List>
    );
}
