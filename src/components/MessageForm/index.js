import React from "react";
import {AUTHORS} from "../../utils/consts";
import {Fab, TextField} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";


export class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.value) {
            this.props.onSubmit({text: this.state.value, author: AUTHORS.YOU});
            this.setState({value: ''})
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField value={this.state.value} onChange={this.handleChange} autoFocus floatingLabelText="Введите сообщение" />
                <Fab type="submit" mini={true}>
                    <SendIcon/>
                </Fab>
            </form>
        );
    }
}
