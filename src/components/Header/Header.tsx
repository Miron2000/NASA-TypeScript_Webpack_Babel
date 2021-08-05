import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => (
  <header className="header">
    <div className="header__section">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__title"><NavLink className="item" to="/">NASA Cards</NavLink></div>
      <div className="header__title"><NavLink className="item" to="/apod">APOD</NavLink></div>
      <div className="header__title"><NavLink className="item" to="/tech">TechTransfer</NavLink></div>
    </div>
  </header>
);

export default Header;
