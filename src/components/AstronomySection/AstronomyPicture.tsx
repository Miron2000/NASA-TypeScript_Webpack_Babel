import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { ApiApods } from '../../types';

const Preloader = require('../../images/preloader.gif');

const AstronomyPicture = () => {
  // const apodFetchResponse = useGetApiApod();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_DATE' });
  }, []);

  const data: ApiApods = useSelector((state: { apod: ApiApods }) => state.apod);
  const loading = useSelector((state: {loading: boolean}) => state.loading);
  console.log(data, 'data');
  console.log(loading, 'loading');

  if (loading) {
    return <img className="preloader" src={Preloader} alt="preloader" />;
  }

  const {
    date, explanation, title, url,
  } = data;

  // if (!apodFetchResponse?.date) {
  //   return <img className="preloader" src={Preloader} alt="preloader" />;
  // }
  //
  // const {
  //   date, explanation, title, url,
  // } = apodFetchResponse;

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
