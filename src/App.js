import thunkMiddleware from 'redux-thunk'
import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppComponent from './components/app/AppComponent';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './reducers/index'
import { fetchGiphy } from './actions/fetchGiphy'
import * as actions from './actions'

class App extends Component {
    constructor() {
        super();
        injectTapEventPlugin();
    }

    render() {
        let store = createStore(
            mainReducer,
            applyMiddleware(
                thunkMiddleware // lets dispatch() functions
            )
        )

        store.dispatch(fetchGiphy('spongebob+happy'));
        store.dispatch(actions.newAdd());
        store.dispatch(actions.newMultiply());

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
