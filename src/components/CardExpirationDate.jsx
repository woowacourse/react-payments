import React from 'react';

function CardExpirationDate(props) {
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input className="input-basic" type="text" maxLength="2" placeholder="MM" />
        <input className="input-basic" type="text" maxLength="2" placeholder="YY" />
      </div>
    </div>
  );
}

export default CardExpirationDate;
