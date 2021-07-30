import React from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Preloader = require('../../images/preloader.gif');

const AstronomyPicture = () => {
  const history = useHistory();
  const apodFetchResponse = useFetch(null);

  if (!apodFetchResponse.apod || apodFetchResponse.loading) {
    return <img className="preloader" src={Preloader} alt="preloader" />;
  }

  const {
    date, explanation, title, url,
  } = apodFetchResponse.apod;

  return (
    <div>
      <button type="button" className="apod__btn" onClick={() => history.push('/')}>&#8592;</button>
      <div className="apod__container">
        <div className="apod__title">
          <h2>{title}</h2>
          <h2>{date}</h2>
        </div>
        <div className="apod__explanation">{explanation}</div>
        <div>
          <img className="apod__img" src={url} alt={url} />
        </div>
      </div>
    </div>
  );
};

export default AstronomyPicture;
