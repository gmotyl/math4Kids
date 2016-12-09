import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppComponent from './components/app/AppComponent';

class App extends Component {
  constructor() {
    super();
    injectTapEventPlugin();
  }

  render() {

    return (
        <MuiThemeProvider >
            <AppComponent />
        </MuiThemeProvider>
  );
  }
}

export default App;
