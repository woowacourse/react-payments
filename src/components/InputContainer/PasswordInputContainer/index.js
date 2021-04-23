import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const PasswordInputContainer = ({ password, handleChange }) => {
  const [firstDigit, secondDigit] = password;
  return (
    <Styled.Container>
      <Styled.Input value={firstDigit} onChange={handleChange} />
      <Styled.Input value={secondDigit} onChange={handleChange} />
      <Styled.BilndInput value={0} />
      <Styled.BilndInput value={0} />
    </Styled.Container>
  );
};

PasswordInputContainer.propTypes = {
  password: PropTypes.array,
};

PasswordInputContainer.defaultProps = {
  password: [1, 2],
};
