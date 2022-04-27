import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  company: PropTypes.string,
  number: PropTypes.object,
  ownerName: PropTypes.string,
  expiryDate: PropTypes.shape({
    month: PropTypes.string,
    year: PropTypes.string,
  }),
};

const CardPreview = ({ company, number, ownerName, expiryDate, handleModal }) => {
  const { first, second, third, fourth } = number;
  const { month, year } = expiryDate;

  return (
    <div className="card-box">
      <div className="empty-card" onClick={handleModal}>
        <div className="card-top">
          <span className="card-text">{company}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{first}</span>
            <span className="card-text">{second}</span>
            <span className="card-text">{'•'.repeat(third.length)}</span>
            <span className="card-text">{'•'.repeat(fourth.length)}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{ownerName || 'NAME'}</span>
            <span className="card-text">
              {month || 'MM'} / {year || 'YY'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardPreview.propTypes = propTypes;

export default CardPreview;
