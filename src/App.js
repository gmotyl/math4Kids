import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Route from './components/app/Route';

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider >
                <Route/>
            </MuiThemeProvider>
        );
    }
}

export default App;
