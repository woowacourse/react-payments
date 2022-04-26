import React from 'react';
import Tooltip from './Tooltip';

function CVC(props) {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input className="input-basic w-25" maxLength="3" type="password" />
      <Tooltip />
    </div>
  );
}

export default CVC;
