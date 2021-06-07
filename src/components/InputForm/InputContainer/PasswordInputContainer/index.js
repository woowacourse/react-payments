import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { CardFormContext } from '../../../../contexts/CardFormContextProvider.js';
import { isNumberType } from '../../../../utils/validators.js';

export const PasswordInputContainer = ({ isValid }) => {
  const { password, setPassword, setPasswordValidity } = useContext(CardFormContext);

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setPassword((password) => ({ ...password, [inputType]: filteredValue }));
  };

  const handlePasswordBlur = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    setPasswordValidity((passwordValidity) => ({ ...passwordValidity, [inputType]: true }));

    if (inputValue.length !== 1) {
      setPasswordValidity((passwordValidity) => ({ ...passwordValidity, [inputType]: false }));
      return;
    }

    const invalidDigit = Object.keys(password).find((key) => !password[key]);

    if (invalidDigit) {
      setPasswordValidity((passwordValidity) => ({ ...passwordValidity, [invalidDigit]: false }));
    }
  };

  return (
    <Styled.Container onBlur={handlePasswordBlur}>
      <Styled.Input
        name={'firstDigit'}
        value={password.firstDigit}
        type={'password'}
        maxLength={1}
        onChange={handlePasswordChange}
        isValid={isValid}
      />
      <Styled.Input
        name={'secondDigit'}
        value={password.secondDigit}
        type={'password'}
        maxLength={1}
        onChange={handlePasswordChange}
        isValid={isValid}
      />
      <Styled.BilndInput value={0} type={'password'} disabled={'disabled'} />
      <Styled.BilndInput value={0} type={'password'} disabled={'disabled'} />
    </Styled.Container>
  );
};

PasswordInputContainer.propTypes = {
  isValid: PropTypes.bool,
};
