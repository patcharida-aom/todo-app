import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { item: [], text: ''}
  }
  handleChange = (event) => {
    this.setState({text: event.target.value})
  }
  onSubmit = (event) =>{
    event.preventDefault()
    this.setState({item: [this.state.item, this.state.text],
    text: ''})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo-App</h1>
        </header>
        <body className="App-body">
          
          <form onSubmit={this.onSubmit}>
            <TextField className="input-list"
              onChange={this.handleChange}
              label="What needs to be done?"
              variant="outlined"
            />
            <p/>
            <button variant="extendedFab"
            size="large"
            onClick = {this.onSubmit}
            >
              Enter
            </button>
          </form>
          <p>{this.state.item}</p>
          
        </body>
      </div>
    );
  }
}

export default App;
