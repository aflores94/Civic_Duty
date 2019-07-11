//jshint esversion:8
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Elections from '../../Components/Elections/Elections';
import Leaderboard from '../../Components/Leaderboard/Leaderboard';
import CivAction from '../../Components/CivAction/CivAction';

const HomePage = (props) => (
    <div className="home-page">
        <NavBar />
        <h1>Action Plan</h1>
        <Leaderboard />
        <Elections />
        <CivAction />
    </div>
);

export default HomePage;