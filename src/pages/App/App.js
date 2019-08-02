import React, {
  Component
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
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
      user: userService.getUser(),
      votersList: [],
      voterId: ''
    };
  }

  getVoterId = (voterId) => {
    this.setState({
      voterId
    })
  }

  getUpdatedVoter = (voter) => {
    const newList = [...this.state.votersList, voter]
    this.setState({
      votersList: newList
    })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    });
  };

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    });
  };


  render() {
    return ( < div className = "App" >
      <
      Router >
      <
      Switch >
      <
      Route exact path = '/home' >
      <
      div >
      <
      HomePage user = {
        this.state.user
      }
      />   <
      /div>  <
      /Route>   <
      Route exact path = '/'
      render = {
        () => < LandingPage / >
      }
      />   <
      Route exact path = '/signup'
      render = {
        ({
          history
        }) =>
        <
        SignupPage history = {
          history
        }
        handleSignupOrLogin = {
          this.handleSignupOrLogin
        }
        />
      }
      />    <
      Route exact path = '/login'
      render = {
        ({
          history
        }) =>
        <
        LoginPage history = {
          history
        }
        handleSignupOrLogin = {
          this.handleSignupOrLogin
        }
        />
      }
      />   <
      Route path = "/edit/:id"
      render = {
        (props) =>
        <
        EditVoter {
          ...props
        }
        getUpdatedVoter = {
          this.getUpdatedVoter
        }
        />
      } >
      <
      /Route>  <
      Route path = "/create"
      component = {
        CreateVoter
      }
      />    <
      /Switch>  <
      /Router>  <
      /div>
    );
  }
}

export default App;