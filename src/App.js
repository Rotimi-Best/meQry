import React, { Component } from 'react';
import logo from './neptune.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h3>Welcome to Meqry.</h3>
            <p>Bringing the future into the present </p>
          </div>
          <div >
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              style= {{margin: '10px'}}
            >
              Log in
            </a>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              style= {{margin: '10px'}}
            >
              Sign up
            </a>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
