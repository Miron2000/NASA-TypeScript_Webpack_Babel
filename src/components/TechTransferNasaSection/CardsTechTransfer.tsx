import React, { FC, useState } from 'react';

const Preloader = require('../../images/preloader.gif');

interface TechTransferProps {
  name: string;
  title: string;
  img: string;
  abbr: string;
}

const CardsTechTransfer: FC<TechTransferProps> = ({
  name, title, img, abbr,
}) => {
  const [loadingImg, setLoadingImg] = useState<boolean>(false);

  return (
    <div className="card__techTransfer">
      <div className="bloc__img">
        {loadingImg ? null
          : (
            <img key={name} src={`http://via.placeholder.com/600x800?text=${encodeURIComponent(name)}`} alt={name} />
          )}
        <img
          style={loadingImg ? {} : { display: 'none' }}
          src={img}
          alt={name}
          onLoad={() => setLoadingImg(true)}
        />
      </div>
      <div className="card__techTransfer-info">
        <h3 className="card__techTransfer__name">{name}</h3>
        <span className="card__techTransfer__abbr">{abbr}</span>
      </div>
      <div className="card__techTransfer-over">
        <h2 className="card__techTransfer__overview">Overview</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CardsTechTransfer;
