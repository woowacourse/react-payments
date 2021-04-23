import React from 'react';
import Icon from '../../Icon';
import Input from '../Input';
import '../../../index.css';
import './passwordInput.css';

export default function PasswordInput({ password, setPassword }) {
  return (
    <div className="password-input__container">
      <label className="password-input__title" id="card-password">
        카드 비밀번호
      </label>
      <div className="password-input__content">
        <Input
          type="password"
          width="2.5rem"
          maxLength="1"
          inputMode="numeric"
          value={password.first}
          onChange={(event) => {
            setPassword({ ...password, first: event.target.value });
          }}
          textAlign="center"
          ariaLabelledby="card-password"
        />
        <Input
          type="password"
          width="2.5rem"
          maxLength="1"
          inputMode="numeric"
          value={password.second}
          onChange={(event) => {
            setPassword({ ...password, second: event.target.value });
          }}
          textAlign="center"
          ariaLabelledby="card-password"
        />
        <Icon.Dot size="7px" margin="18px" color="#04C09E" />
        <Icon.Dot size="7px" margin="18px" color="#04C09E" />
      </div>
    </div>
  );
}
