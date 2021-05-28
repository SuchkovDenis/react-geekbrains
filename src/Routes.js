import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Chat} from "./components/Chat";
import {Profile} from "./components/Profile";
import React from "react";
import {Header} from "./components/Header";
import {Weather} from "./components/Weather";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={ Chat } />
                <Route exact path='/profile/' component={ Profile } />
                <Route exact path='/chat/:chatId/' component={ Chat } />
                <Route exact path='/:city' component={ Weather } />
            </Switch>
        </BrowserRouter>
    );
}
