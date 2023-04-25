import React from 'react';

import type { AddCardNumberInputProps } from '../type';
import './AddCardNumberInput.css';

const AddCardNumberInput = ({ cardNumber, onChange }: AddCardNumberInputProps) => {
  const { first, second, third, fourth } = cardNumber;
  return (
    <section className="card-number-input-container">
      <span className="form-label">카드 번호</span>
      <div className="card-number-input">
        <input
          className="input-element card-number"
          value={first}
          onChange={onChange}
          name="first"
          required
        />
        <span className="sperator">-</span>
        <input
          className="input-element card-number"
          value={second}
          onChange={onChange}
          name="second"
          required
        />
        <span className="sperator">-</span>
        <input
          className="input-element input-password-container card-number"
          type="password"
          maxLength={4}
          minLength={4}
          value={third}
          onChange={onChange}
          name="third"
          required
        />
        <span className="sperator">-</span>
        <input
          className="input-element input-password-container card-number"
          type="password"
          maxLength={4}
          minLength={4}
          value={fourth}
          onChange={onChange}
          name="fourth"
          required
        />
      </div>
    </section>
  );
};

export default React.memo(AddCardNumberInput);
