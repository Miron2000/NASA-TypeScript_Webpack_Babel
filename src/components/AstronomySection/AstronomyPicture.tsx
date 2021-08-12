import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useGetApiApod from '../../hooks/useGetApiApod';

const Preloader = require('../../images/preloader.gif');
const preloaderForImg = require('../../images/preloaderForImg.gif');

const AstronomyPicture = () => {
  const [loadingImg, setLoadingImg] = useState<boolean>(false);
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
          {loadingImg ? null
            : (
              <img className="preloader" src={preloaderForImg} alt="preloader" />
            )}
          <img
            className="apod__img"
            src={url}
            alt={url}
            style={loadingImg ? {} : { display: 'none' }}
            onLoad={() => setLoadingImg(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default AstronomyPicture;
