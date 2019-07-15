//jshint esversion:8 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css';

class SignupForm extends Component {

    state = {
        name: '',
        email: '',
        organization: '',
        subOrganization: '',
        registeredVoter: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            // Using ES2015 Computed Property Names
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            // Let <App> know a user has signed up!
            this.props.handleSignupOrLogin();
            // Successfully signed up - show GamePage
            this.props.history.push('/');
        } catch (err) {
            // Invalid user data (probably duplicate email)
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.organization && this.state.subOrganization && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
            <div>
                <header className="header-footer">Sign Up</header>
                <form autocomplete="off" className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <select type="organization" className="form-control" value={this.state.organization} name="organization" onChange={this.handleChange}>
                            <option value="Organization">Organization</option>
                            <option value="General Assembly">General Assembly</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select type="subOrganization" className="form-control" value={this.state.subOrganization} name="subOrganization" onChange={this.handleChange}>
                            <option className="dropdown" value="SubOrganization">SubOrganization</option>
                            <option value="Dallas">Dallas</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Austin">Austin</option>
                            <option value="LA">LA</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" className="form-control" name="registeredVoter" value={this.state.registeredVoter} onChange={this.handleChange} />
                        Are you a registered voter?
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;