import React from 'react';
import ReactDOM from 'react-dom';
import {Chat} from "./components/Chat";
import {MuiThemeProvider} from "@material-ui/core";

ReactDOM.render(
    <MuiThemeProvider>
        <Chat/>
    </MuiThemeProvider>,
    document.getElementById('root'),
);
