import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from "@material-ui/core";
import {Header} from './components/Header';
import {store} from "./store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider>
                <Header/>
                <Router/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
