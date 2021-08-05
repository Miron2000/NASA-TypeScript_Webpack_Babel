import React, { FC } from 'react';

interface TechTransferProps {
  name: string;
  title: string;
  img: string;
  abbr: string;
}

const CardsTechTransfer: FC<TechTransferProps> = ({
  name, title, img, abbr,
}) => (
  <div className="card__techTransfer">
    <img src={img} alt={img} />
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

export default CardsTechTransfer;
