import React from 'react';

import type { AddCardNumberInputProps } from '../type';

const AddCardNumberInput = ({ cardNumber, onChange }: AddCardNumberInputProps) => {
  const { first, second, third, fourth } = cardNumber;
  return (
    <div>
      <span className="form-label">카드 번호</span>
      <div className="card-number-input-container">
        <input
          className="input-box card-number"
          value={first}
          onChange={onChange}
          name="first"
          required
        />
        <span>-</span>
        <input
          className="input-box card-number"
          value={second}
          onChange={onChange}
          name="second"
          required
        />
        <span>-</span>
        <input
          className="input-password-container card-number"
          type="password"
          maxLength={4}
          minLength={4}
          value={third}
          onChange={onChange}
          name="third"
          required
        />
        <span>-</span>
        <input
          className="input-password-container card-number"
          type="password"
          maxLength={4}
          minLength={4}
          value={fourth}
          onChange={onChange}
          name="fourth"
          required
        />
      </div>
    </div>
  );
};

export default React.memo(AddCardNumberInput);
