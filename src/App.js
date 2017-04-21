import React, { ReactDOM, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './Main';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);

export default App;
