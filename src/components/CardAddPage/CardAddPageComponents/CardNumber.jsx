import React from 'react';

function CardNumber(props) {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input className="input-basic" maxLength="4" type="text" />
        <input className="input-basic" maxLength="4" type="text" />
        <input className="input-basic" maxLength="4" type="password" />
        <input className="input-basic" maxLength="4" type="password" />
      </div>
    </div>
  );
}

export default CardNumber;
