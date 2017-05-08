import React, { Component } from 'react';
import './App.css';
import Container from '../container/Container';
import Button from '../button/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
    }
  }
  
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
