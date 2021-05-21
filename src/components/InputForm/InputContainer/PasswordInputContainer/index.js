import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const PasswordInputContainer = ({ password, isValid, handleChange, handleBlur }) => {
  const { firstDigit, secondDigit } = password;
  return (
    <Styled.Container onBlur={handleBlur}>
      <Styled.Input
        name={'firstDigit'}
        value={firstDigit}
        onChange={handleChange}
        isValid={isValid}
      />
      <Styled.Input
        name={'secondDigit'}
        value={secondDigit}
        onChange={handleChange}
        isValid={isValid}
      />
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
