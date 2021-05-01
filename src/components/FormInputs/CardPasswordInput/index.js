import React from 'react';
import { Input } from '..';
import { Icon } from '../..';
import '../../../index.css';
import './style.css';

export default function CardPasswordInput({ password, onSetPassword }) {
  return (
    <div className="card-password-input__container">
      <label className="card-password-input__title" htmlFor="card-password-first">
        카드 비밀번호
      </label>
      <div className="card-password-input__content">
        {Object.entries(password).map(([key, value]) => (
          <Input
            id={`card-password-${key}`}
            type="password"
            inputStyle={{ width: '2.5rem' }}
            maxLength="1"
            inputMode="numeric"
            key={key}
            value={value}
            onChange={(event) => {
              onSetPassword(key, event.target.value);
            }}
            textAlign="center"
            ariaLabelledby="card-password"
          />
        ))}
        <Icon.Dot size="7px" color="#04C09E" style={{ margin: '18px' }} />
        <Icon.Dot size="7px" color="#04C09E" style={{ margin: '18px' }} />
      </div>
    </div>
  );
}
