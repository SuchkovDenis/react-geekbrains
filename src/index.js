import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from "@material-ui/core";
import {Header} from './components/Header';

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Header/>
            <Router/>
        </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
