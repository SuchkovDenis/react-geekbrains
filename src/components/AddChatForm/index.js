import React from "react";
import {AUTHORS} from "../../utils/consts";
import {Fab, TextField} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";


export class AddChatForm extends React.Component {

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
            this.props.handleAddChat(this.state.value);
            this.setState({value: ''})
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField value={this.state.value} onChange={this.handleChange} autoFocus floatingLabelText="Новый чат" />
                <Fab type="submit" mini>
                    <AddIcon/>
                </Fab>
            </form>
        );
    }
}
