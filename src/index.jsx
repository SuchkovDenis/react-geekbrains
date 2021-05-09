import React from 'react';
import ReactDOM from 'react-dom';

const MessageComponent = ({text}) => <div>{text}</div>;

class MessageField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            count: 1
        }
    }

    addMessage = () => {
        this.setState(prevState => {
            return {
                messages: [...prevState.messages, 'Сообщение ' + prevState.count],
                count: prevState.count + 1
            };
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.addMessage}>Жмакни</button>
                {this.state.messages.map(message => <MessageComponent text={message}/>)}
            </div>
        );
    }
}

ReactDOM.render(
    <MessageField/>,
    document.getElementById('root'),
);
