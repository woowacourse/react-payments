import React from 'react';
import PropTypes from 'prop-types';

function Card({ isEmpty, handleCardAdd, cardInfo }) {
  return (
    <div className="card-box">
      <div
        className={isEmpty ? 'card-container card-empty' : 'card-container card-not-empty'}
        onClick={handleCardAdd}
      >
        {isEmpty ? (
          '+'
        ) : (
          <>
            <div className="card-top"></div>
            <div className="card-middle">
              <div className="small-card__chip blinking"></div>
            </div>

            <div className="card-bottom">
              <div className="card-text card-number-flex">
                <div className="card-number-letter-spacing">{cardInfo?.number1}</div>
                <div className="card-number-letter-spacing">{cardInfo?.number2}</div>
                <div className="hidden-card-number-letter-spacing">
                  {'ㆍ'.repeat(cardInfo?.number3.length)}
                </div>
                <div className="hidden-card-number-letter-spacing">
                  {'ㆍ'.repeat(cardInfo?.number4.length)}
                </div>
              </div>
              <div className="card-bottom-position">
                <div className="card-bottom__info">
                  <span className="card-text">
                    {cardInfo.owner === '' ? 'NAME' : cardInfo.owner.slice(0, 10)}
                  </span>
                  <span className="card-text">
                    {cardInfo.month || 'MM'} / {cardInfo.year || 'YY'}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  handleCardAdd: PropTypes.func,
  cardInfo: PropTypes.object,
};
