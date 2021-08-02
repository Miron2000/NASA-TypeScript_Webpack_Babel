import React from 'react';
import { useHistory } from 'react-router-dom';
import useGetApiApod from '../../hooks/useGetApiApod';

const Preloader = require('../../images/preloader.gif');

const AstronomyPicture = () => {
  const apodFetchResponse = useGetApiApod();
  const history = useHistory();

  if (!apodFetchResponse?.date) {
    return <img className="preloader" src={Preloader} alt="preloader" />;
  }

  const {
    date, explanation, title, url,
  } = apodFetchResponse;

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
