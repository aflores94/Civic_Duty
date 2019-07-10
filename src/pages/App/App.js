//jshint esversion:6

import React, {Component} from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import {Link, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return ( 
    <div className="App" >
      <header className="App-header"> 
          <nav>
                <Link className = '' to = '/home' > Home </Link> 
          </nav> 
      </header>
        <Route exact path = '/home' render = {() => <HomePage />}
          />
        <Route exact path = '/' render = {() => < LandingPage />}
          />
      <footer className="App-footer">Copyright &copy; Andrea Flores 2019</footer>
    </div>
    );
  }
}

export default App;