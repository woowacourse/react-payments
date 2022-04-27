import React from 'react';

function CardExpirationDate({ cardNumbers, onChange }) {
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          name="month"
          className="input-basic"
          type="text"
          maxLength="2"
          placeholder="MM"
          onChange={onChange}
          value={cardNumbers.month}
        />
        <input
          name="year"
          className="input-basic"
          type="text"
          maxLength="2"
          placeholder="YY"
          onChange={onChange}
          value={cardNumbers.year}
        />
      </div>
    </div>
  );
}

export default CardExpirationDate;
