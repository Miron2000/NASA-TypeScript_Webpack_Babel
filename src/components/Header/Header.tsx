import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => (
  <header className="header">
    <div className="header__section">
      <img className="header__logo header__test" src={logo} alt="logo" />
      <div className="header__title header__test"><NavLink className="item" to="/">Mars Rover Photos</NavLink></div>
      <div className="header__title header__test"><NavLink className="item" to="/apod">APOD</NavLink></div>
      <div className="header__title header__test"><NavLink className="item" to="/tech">NASA Cards</NavLink></div>
    </div>
  </header>
);

export default Header;
