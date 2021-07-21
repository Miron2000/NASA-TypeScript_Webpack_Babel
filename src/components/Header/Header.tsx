// eslint-disable-next-line no-use-before-define
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <header className="header">
    <div className="header__section">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header_title"><NavLink to="/">NASA Cards</NavLink></div>
    </div>
  </header>
);

export default Header;
