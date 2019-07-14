//jshint esversion:8
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Elections from '../../Components/Elections/Elections';
import Leaderboard from '../../Components/Leaderboard/Leaderboard';
import Representatives from '../../Components/Representatives/Representatives';
import "./HomePage.css";

const HomePage = (props) => (
    <div className="home-page">
        <NavBar className="navbar"/>
        <h1 className="title">Action Plan</h1>
        <Leaderboard className="leaderboard"/>
        <Elections className="elections"/>
        <Representatives className="representatives"/>
        <footer className="footer">Copyright &copy; Andrea Flores 2019</footer>
    </div>
);

export default HomePage;