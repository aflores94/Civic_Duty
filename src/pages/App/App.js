//jshint esversion:8
import React, {Component} from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import {Route} from 'react-router-dom';
import userService from '../../utils/userService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return ( 
    <div className="App" >
        <Route exact path = '/home' render = {() => <HomePage />}
          />
        <Route exact path = '/' render = {() => < LandingPage />}
          />
        <Route exact path = '/signup' render = {({ history }) => 
        <SignupPage
          history={history}

        />
      }/>
        <Route exact path = '/login' render = {() => 
        <LoginPage

        />
      }/>
    </div>
    );
  }
}

export default App;