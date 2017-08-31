import React, { Component } from 'react';
import './App.css';
import Container from '../container/Container';
import Button from '../button/Button';
import peopleCleaner from '../../helpers/peopleCleaner';
import planetCleaner from '../../helpers/planetCleaner';
import vehicleCleaner from '../../helpers/vehicleCleaner';
import filmCleaner from '../../helpers/filmCleaner';
import ScrollCard from '../card/ScrollCard';


class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      people: {},
      planets: {},
      vehicles: {},
      scroll: [],
      toDisplay: {},
      favorites: [],
    };
  }

  componentDidMount() {
    this.createPromise().then(array => this.setState({
      people: array[0],
      planets: array[1],
      vehicles: array[2],
    }),
  );

    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(filmObj => filmCleaner(filmObj))
      .then(scrolls => this.setState({ scroll: scrolls }))
      .catch(() => { console.log('scroll error'); },
    );
  }

  createPromise() {
    const people = fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(peopleObj => peopleCleaner(peopleObj))
      .catch(() => { console.log('people error'); },
    );

    const planets = fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(planetObj => planetCleaner(planetObj))
      .catch(() => { console.log('planet error'); },
    );

    const vehicles = fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(vehicleObj => vehicleCleaner(vehicleObj))
      .catch(() => { console.log('vehicle error'); },
    );

    return Promise.all([people, planets, vehicles, scroll]).catch(() => console.log('Promise All Error'));
  }

  handleClick(category) {
    this.setState({
      category,
    });
  }

  toggleFavorites(card) {
    const newFavorites = [...this.state.favorites];
    if (!newFavorites.length) {
      newFavorites.push(card);
    } else if (newFavorites.includes(card)) {
      const index = newFavorites.indexOf(card);
      newFavorites.splice(index, 1);
    } else {
      newFavorites.push(card);
    }
    this.setState({ favorites: newFavorites });
  }

  render() {
    return (
      <div className="App">
        <aside className='scroll-wrapper'>
          <ScrollCard quote={this.state.scroll} />
        </aside>
        <section className='main-wrapper'>
          <h1> SWAPI-Box </h1>
          <Button handleClick={(category) => { this.handleClick(category); }}
            people={this.state.people}
            planets={this.state.planets}
            vehicles={this.state.vehicles}
            category={this.state.category}
            favorites={this.state.favorites}
          />

          <Container
            people={this.state.people}
            planets={this.state.planets}
            vehicles={this.state.vehicles}
            category={this.state.category}
            handleFavorite={this.toggleFavorites.bind(this)}
            favorites={this.state.favorites}/>
        </section>
      </div>
    );
  }
}

export default App;
