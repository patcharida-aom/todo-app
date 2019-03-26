import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo-App</h1>
        </header>
        <body className="App-body">
          <TextField className="input-list"
            label="What needs to be done?"
            variant="outlined"
          />
        </body>
      </div>
    );
  }
}

export default App;
