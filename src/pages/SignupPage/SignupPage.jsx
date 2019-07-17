import React, { Component } from 'react';
import SignupForm from '../../Components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '' }
    }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    render() {
        return (
            <div className='SignupPage'>
                <SignupForm {...this.props} updateMessage={this.updateMessage} handleSignupOrLogin={this.props.handleSignupOrLogin} />
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default SignupPage;