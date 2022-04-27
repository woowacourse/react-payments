import React, { useRef } from 'react';

function CardPassword({ cardNumbers, onChange }) {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        name="password1"
        className="input-basic w-15 input-password"
        type="password"
        minLength="1"
        maxLength="1"
        onChange={onChange}
        value={cardNumbers.password1}
      />
      <input
        name="password2"
        className="input-basic w-15 input-password"
        type="password"
        minLength="1"
        maxLength="1"
        onChange={onChange}
        value={cardNumbers.password2}
      />
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
