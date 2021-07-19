import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';
import logo from "../../logo/logo.png";

const Header = () => {

    return (
        <header className='header'>
            <div className="header__section">
                <img className="header__logo" src={logo} alt="logo"/>
                <div><NavLink to='/'>NASA Cards</NavLink></div>
            </div>
        </header>
    );
}

export default Header;