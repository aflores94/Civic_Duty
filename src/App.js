//jshint esversion:6

import React, {Component} from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';

class App extends Component {
  render() {
    return ( 
    <div className = "App" >
      <header className = "App-header"> Log In </header> 
      <LandingPage />
      <footer className = "App-footer">Copyright @ Andrea Flores 2019</footer>
    </div>
    );
  }
}

export default App;
