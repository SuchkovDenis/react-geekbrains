import React, {useState} from "react";
import {Fab, TextField} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {useDispatch} from "react-redux";
import {addChat} from "../../store/chats/actions";


export const AddChatForm = () => {

    const [value, setValue] = useState( '');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value) {
            dispatch(addChat(value));
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={value} onChange={handleChange} autoFocus floatingLabelText="Новый чат" />
            <Fab type="submit" mini>
                <AddIcon/>
            </Fab>
        </form>
    );
}
