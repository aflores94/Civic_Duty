import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import EditVoter from "../../Components/EditVoter/EditVoter";
import CreateVoter from "../../Components/CreateVoter/CreateVoter";
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser()});
  };


  render() {
    return ( 
    <div className="App" >
        <Route exact path = '/home' render = {() => <HomePage />}/>
        <Route exact path = '/' render = {() => <LandingPage />}/>
        <Route exact path = '/signup' render = {({ history }) => 
          <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}/>
        }/>
        <Route exact path = '/login' render = {() => <LoginPage />}/>
      <Route path = "/edit/:id" component = {EditVoter} /> 
      <Route path = "/create" component = {CreateVoter} /> 
    </div>
    );
  }
}

export default App;