import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="top-bar">
            <ul className="list-inline">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul> 
        </nav>
    );
}

export default Nav;