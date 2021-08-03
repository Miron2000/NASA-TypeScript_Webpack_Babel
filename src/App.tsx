import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/index.scss';
import {useDispatch, useSelector} from 'react-redux';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import AstronomyPicture from './components/AstronomySection/AstronomyPicture';
import Footer from './components/Footer/Footer';
import logo from './images/logo.png';

const App: React.FC = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  console.log(store);

  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <h1 className="title">
          NASA Mars Rover Photos -
          {process.env.NODE_ENV}
          {process.env.name}
        </h1>
        <button type="button" onClick={() => dispatch({ type: 'LOAD_DATE' })}>Click me</button>
        <img className="nasa__img" src={logo} alt="logo" />
        <Switch>
          <Route exact path="/" component={MainSection} />
          <Route exact path="/apod" component={AstronomyPicture} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
