import React from 'react';

function Card({ isEmpty, handleCardAdd, cardNumbers }) {
  return (
    <div className="card-box">
      <div className="empty-card" onClick={handleCardAdd}>
        {isEmpty ? (
          '+'
        ) : (
          <>
            <div className="card-top"></div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>

            <div className="card-bottom">
              <div className="card-text card-number-flex">
                <div className="card-number-letter-spacing">{cardNumbers?.number1}</div>
                <div className="card-number-letter-spacing">{cardNumbers?.number2}</div>
                <div className="hidden-card-number-letter-spacing">
                  {'ㆍ'.repeat(cardNumbers?.number3.length)}
                </div>
                <div className="hidden-card-number-letter-spacing">
                  {'ㆍ'.repeat(cardNumbers?.number4.length)}
                </div>
              </div>
              <div className="card-bottom-position">
                <div className="card-bottom__info">
                  <span className="card-text">NAME</span>
                  <span className="card-text">MM / YY</span>
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
