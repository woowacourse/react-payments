import React from 'react';

function Card() {
  return (
    <div className="card-box">
      <div className="empty-card">
        {/* 카드 이미지 */}
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text">NAME</span>
            <span className="card-text">MM / YY</span>
          </div>
        </div>
        {/* 카드 이미지 */}
      </div>
    </div>
  );
}

export default Card;
