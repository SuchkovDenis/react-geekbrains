import React from "react";
import {AUTHORS} from "../../utils/consts";


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
        this.props.onSubmit({text: this.state.value, author: AUTHORS.YOU});
        this.setState({value: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Сообщение:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Отправить"/>
            </form>
        );
    }
}
