import React from 'react';

function Card({ isEmpty, handleCardAdd }) {
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
                <div>0000</div>
                <div>1111</div>
                <div>2222</div>
                <div>3333</div>
              </div>
              <div className="card-bottom__info">
                <span className="card-text">NAME</span>
                <span className="card-text">MM / YY</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
