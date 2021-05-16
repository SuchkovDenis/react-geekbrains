import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Chat} from '../Chat';
import { Profile } from '../Profile';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Chat } />
                <Route exact path='/profile/' component={ Profile } />
                <Route exact path='/chat/:chatId/' render={ (obj) =>
                    <Chat chatId={ Number(obj.match.params.chatId) } /> } />
            </Switch>
        );
    }
}