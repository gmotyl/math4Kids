import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppComponent from './components/app/AppComponent';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './reducers/index'

class App extends Component {
    constructor() {
        super();
        injectTapEventPlugin();
    }

    render() {
        let store = createStore(mainReducer)

        return (
            <Provider store={store}>
                <MuiThemeProvider >
                    <AppComponent />
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
