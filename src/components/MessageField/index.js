import React from "react";
import {MessageComponent} from "../Message";
import {AUTHORS} from "../../utils/consts";
import {MessageForm} from "../MessageForm";

export class MessageField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {messages: []}
    }

    handleAddMessage = (message) => {
        this.setState(prevState => {
            return {messages: [...prevState.messages, message]};
        });
    }

    componentDidUpdate() {
        console.log('Компонент был обновлен');
        if (this.state.messages[this.state.messages.length - 1].author === AUTHORS.YOU) {
            this.setState(prevState => {
                return {
                    messages: [...prevState.messages, {text: 'Привет от робота', author: AUTHORS.ROBOT}],
                };
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.messages.map(message => <MessageComponent props={message}/>)}
                <MessageForm onSubmit = {this.handleAddMessage}/>
            </div>
        );
    }
}
