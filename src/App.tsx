import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/index.scss';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import AstronomyPicture from './components/AstronomySection/AstronomyPicture';
import TechTransfer from './components/TechTransferNasaSection/TechTransfer';
import Footer from './components/Footer/Footer';
import logo from './images/logo.png';
import Toggle from './components/Toggle/Toggle';

const App: React.FC = () => {
  const getDarkMode = () => JSON.parse(localStorage.getItem('darkMode') as string) || false;
  const [darkMode, setDarkMode] = useState<boolean>(getDarkMode());

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark-mode' : 'light-mode'} data-testid="darkModeApp">
        <div className="page">
          <Header />
          <Toggle setDarkMode={setDarkMode} darkMode={darkMode} />
          <h1 className="title">
            NASA-
            {process.env.NODE_ENV}
            {process.env.name}
          </h1>
          <img className="nasa__img" src={logo} alt="logo" />
          <Switch>
            <Route exact path="/" component={MainSection} />
            <Route exact path="/apod">
              <AstronomyPicture />
            </Route>
            <Route exact path="/tech" component={TechTransfer} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
