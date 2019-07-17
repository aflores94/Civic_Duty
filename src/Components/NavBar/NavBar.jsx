import React, { Component } from 'react';
import { Link } from 'react-router-dom';

    const NavBar = (props) => {
        let nav = props.user ?
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <Link to="/" className="navbar-brand">Civic Duty</Link>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Voters</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create Voter</Link>
                            </li>
                        </ul>
                    <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
                </nav>
            </div>
            :
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to='/login' className='NavBar-link'>Log In</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to='/signup' className='NavBar-link'>Sign Up</Link>
                </nav>
            </div>;
        return (
            <div className='NavBar'>
                {nav}
            </div>
        );
    };

    export default NavBar;