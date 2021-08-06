import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CardsTechTransfer from './CardsTechTransfer';

const Preloader = require('../../images/preloader.gif');

const TechTransfer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_DATE' });
  }, []);

  const data = useSelector((state: any) => state.techTransfer.results);
  const loading = useSelector((state: { loading: boolean }) => state.loading);
  console.log(data, 'data');

  if (loading) {
    return <img className="preloader" src={Preloader} alt="preloader" />;
  }

  return (
    <div>
      <button type="button" className="apod__btn" onClick={() => history.push('/')}>&#8592;</button>
      <div className="container__cards">
        <div className="container">
          {data?.map((item: any) => (
            <CardsTechTransfer name={item['1']} title={item['2']} abbr={item['9']} img={item['10']} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTransfer;
