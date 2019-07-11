//jshint esversion:8
import React from 'react';
import { Link } from 'react-router-dom';

const Enter = (props) => {
    let nav = props.user ?
        <div>
            <Link to='' className='Enter-link'>LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='Enter-welcome'>WELCOME, {props.user.name}</span>
        </div>
        :
        <div>
            <Link to='/login' className='Enter-link'>LOG IN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='Enter-link'>SIGN UP</Link>
        </div>;

    return (
        <div className='Enter'>
            {nav}
        </div>
    );
};


export default Enter;