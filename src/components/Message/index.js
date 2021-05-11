import React from "react";

export const MessageComponent = ({props}) => {
    return (
        <div><b>{props.author}:</b> {props.text}</div>
    );
}
