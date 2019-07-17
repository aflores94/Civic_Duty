import React from 'react';

const Leaderboard = props => (
    <div className="leaderboard">
        <h1>Leaderboard goes here</h1>
        <div>{props.user.organization}</div>
    </div>
);

export default Leaderboard;