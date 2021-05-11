import React from "react";
import {Chip} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import {AUTHORS} from "../../utils/consts";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    right: {
        display: "flex",
        justifyContent: "flex-end"
    },
}));

export const MessageComponent = ({props}) => {
    const classes = useStyles();
    const isOwner = props.author === AUTHORS.YOU;

    return (
        <div className={isOwner ? classes.right : ''}>
           <Chip label={props.text}
                 avatar={isOwner ? <Avatar>Вы</Avatar> : <Avatar>R</Avatar>}
           />
        </div>
    );
}
