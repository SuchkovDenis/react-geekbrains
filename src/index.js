import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from "@material-ui/core";
import {persistor, store} from "./store";
import {Routes} from "./Routes";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <MuiThemeProvider>
                <Routes/>
            </MuiThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
