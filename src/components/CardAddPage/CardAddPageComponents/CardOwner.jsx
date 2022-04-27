import React from 'react';

function CardOwner(props) {
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-length">0/30</span>
      </div>
      <input type="text" className="input-basic" />
    </div>
  );
}

export default CardOwner;
