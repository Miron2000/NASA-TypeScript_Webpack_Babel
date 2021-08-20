import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/index.scss';
// eslint-disable-next-line import/no-cycle
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import AstronomyPicture from './components/AstronomySection/AstronomyPicture';
import TechTransfer from './components/TechTransferNasaSection/TechTransfer';
import Footer from './components/Footer/Footer';
import logo from './images/logo.png';
import { AppTheme } from './AppTheme';

interface IThemeContext {
  theme: string;
  setTheme: any;
}
export const ThemeContext = React.createContext({} as IThemeContext);

const App: React.FC = () => {
  const getDarkMode = () => JSON.parse(localStorage.getItem('darkMode') as string);
  const [theme, setTheme] = useState<string>(getDarkMode());

  const headerStyle: AppTheme = {
    dark: {
      backgroundColor: '#626363',
      color: '#fff',
    },
    light: {
      backgroundColor: '#fff',
      color: '#333',
    },
    common: {
      transition: 'all 1s ease',
    },
  };

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div style={themeStyle} data-testid="darkModeApp">
          <div className="page">
            <Header />
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
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};
export default App;
