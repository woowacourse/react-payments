import React from 'react';
import Tooltip from './Tooltip';

function CVC({ cardNumbers, onChange }) {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        name="cvc"
        className="input-basic w-25"
        minLength="3"
        maxLength="3"
        type="password"
        onChange={onChange}
        value={cardNumbers.cvc}
      />
      <Tooltip />
    </div>
  );
}

export default CVC;
