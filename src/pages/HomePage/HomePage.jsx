import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Elections from '../../Components/Elections/Elections';
import Representatives from '../../Components/Representatives/Representatives';
import VotersList from "../../Components/VotersList/VotersList";

import "./HomePage.css";

const HomePage = (props) => (
    <div className="home-page">
        <header><NavBar className="navbar" /></header>
        <h1 className="title">Action Plan</h1>
        <VotersList className="voters-list"/>
        <Elections className="elections"/>
        <Representatives className="representatives"/>
        <footer className="footer">Copyright &copy; Andrea Flores 2019</footer>
    </div>
);

export default HomePage;