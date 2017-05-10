import React, { Component } from 'react';
import './App.css';
import Container from '../container/Container';
import Button from '../button/Button';
import peopleCleaner from '../../helpers/peopleCleaner';
import planetCleaner from '../../helpers/planetCleaner';
import vehicleCleaner from '../../helpers/vehicleCleaner';


class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      categoryData: {},
      people: {},
      planets: {},
      vehicles: {},
      scroll: [],
      toDisplay: {},
    }
  }

  componentDidMount() {
    this.createPromise().then((array) => this.setState({
      people: array[0],
      planets: array[1],
      vehicles: array[2]
    }));
  }

  createPromise(){
    const people = fetch('http://swapi.co/api/people/')
      .then((response) => response.json())
      .then((peopleObj) => peopleCleaner(peopleObj));
    const planets = fetch('http://swapi.co/api/planets/')
      .then((response) => response.json())
      .then((planetObj) => planetCleaner(planetObj));
    const vehicles = fetch('http://swapi.co/api/vehicles/')
      .then((response) => response.json())
      .then((vehicleObj) => vehicleCleaner(vehicleObj))
    return Promise.all([people, planets, vehicles])
  }

  handleClick(state, category){
    this.setState({
      category: category,
      toDisplay: state
    })
  }

  render() {
    return (
      <div className="App">
        <h1> SWAPI-Box </h1>
        <Button handleClick={(input, category) => {this.handleClick(input, category)}}
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles}
          category={this.state.category}
        />

        <Container
          categoryData={this.state.toDisplay}
          category={this.state.category}/>
      </div>
    );
  }
}

export default App;
