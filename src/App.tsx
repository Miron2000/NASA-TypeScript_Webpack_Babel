// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/index.scss';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';
import logo from './images/logo.png';

const App: React.FC = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <div className="page">
      <Header />
      <h1 className="title">
        NASA Mars Rover Photos -
        {process.env.NODE_ENV}
        {process.env.name}
      </h1>
      <img className="nasa__img" src={logo} alt="logo" />
      <Switch>
        <Route exact path="/" component={MainSection} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
