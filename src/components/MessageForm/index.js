import React, {useState} from "react";
import {AUTHORS} from "../../utils/consts";
import {Fab, TextField} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";


export const MessageForm = (props) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value) {
            props.onSubmit({text: value, author: AUTHORS.YOU});
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={value} onChange={handleChange} autoFocus floatingLabelText="Введите сообщение" />
            <Fab type="submit" mini={true}>
                <SendIcon/>
            </Fab>
        </form>
    );
}
