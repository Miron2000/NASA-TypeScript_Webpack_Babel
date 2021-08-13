import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
// eslint-disable-next-line import/no-cycle
import ThemeToggle from '../ThemeToogle/ThemeToggle';

const Header = () => (
  <header className="header">
    <div className="header__section">
      <img className="header__logo header__test" src={logo} alt="logo" />
      <div className="header__title header__test"><NavLink className="item" to="/">Mars Rover Photos</NavLink></div>
      <div className="header__title header__test"><NavLink className="item" to="/apod">APOD</NavLink></div>
      <div className="header__title header__test"><NavLink className="item" to="/tech">NASA Cards</NavLink></div>
    </div>
    <div className="toggle__header">
      <ThemeToggle />
    </div>
  </header>
);

export default Header;
