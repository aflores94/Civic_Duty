//jshint esversion:6
import React from 'react';
import LoginButton from '../../Components/LoginButton/LoginButton';
import SignUpButton from '../../Components/SignUpButton/SignUpButton';

const LandingPage = (props) => (
    <div className="landing-page">
        <h1>Civic Duty</h1>
        <div>
            Logo
        </div>
        <LoginButton />
        <SignUpButton />
    </div>
);

export default LandingPage;