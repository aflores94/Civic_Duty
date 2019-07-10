//jshint esversion:6

import React, {Component} from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';

class App extends Component {
  render() {
    return ( 
    <div className = "App" >
      <header className = "App-header"> Civic Duty </header> 
      <LandingPage />
    </div>
    );
  }
}

export default App;
