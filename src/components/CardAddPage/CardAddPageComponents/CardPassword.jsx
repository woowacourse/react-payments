import React from 'react';

function CardPassword(props) {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input className="input-basic w-15 input-password" type="password" />
      <input className="input-basic w-15 input-password" type="password" />
      <input
        className="input-basic w-15 input-password-hidden"
        type="password"
        value={'x'}
        disabled
      />
      <input
        className="input-basic w-15 input-password-hidden"
        type="password"
        value={'x'}
        disabled
      />
    </div>
  );
}

export default CardPassword;
