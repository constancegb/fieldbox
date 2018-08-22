import React, { Component } from 'react';
import TextInput from './TextInput.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='input-frame'><TextInput /></div>
      </div>
    );
  }
}

export default App;
