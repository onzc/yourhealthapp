import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
export class Nav extends Component {
    displayName = Nav.name

    render() {
        return (
            <div className="menuBar" >
                <div><img className='logo' src='logo.png' alt='Your Health' /></div>
                <div className="menu">
                    <Link className="menuItem" to={'/'}>Home</Link>
                    <Link className="menuItem" to={'/aboutUs'}>About Us</Link>
                    <Link className="menuItem" to={'/contactUs'}>Contact Us</Link>
                    
                </div>

            </div>
        );
    }
}