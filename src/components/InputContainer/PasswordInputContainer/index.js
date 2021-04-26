import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const PasswordInputContainer = ({ password, handleChange }) => {
  const { firstDigit, secondDigit } = password;
  return (
    <Styled.Container>
      <Styled.Input name={'firstDigit'} value={firstDigit} onChange={handleChange} />
      <Styled.Input name={'secondDigit'} value={secondDigit} onChange={handleChange} />
      <Styled.BilndInput value={0} />
      <Styled.BilndInput value={0} />
    </Styled.Container>
  );
};

PasswordInputContainer.propTypes = {
  password: PropTypes.object,
};

PasswordInputContainer.defaultProps = {
  password: { firstDigit: 1, secondDigit: 2 },
};
