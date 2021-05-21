import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const NumbersInputContainer = ({ numbers, isValid, handleChange, handleBlur }) => {
  const { first, second, third, fourth } = numbers;
  return (
    <Styled.Container onBlur={handleBlur} isValid={isValid}>
      <Styled.Input name={'first'} value={first} onChange={handleChange} />
      <span>-</span>
      <Styled.Input name={'second'} value={second} onChange={handleChange} />
      <span>-</span>
      <Styled.BlindInput name={'third'} value={third} onChange={handleChange} />
      <span>-</span>
      <Styled.BlindInput name={'fourth'} value={fourth} onChange={handleChange} />
    </Styled.Container>
  );
};

NumbersInputContainer.propTypes = {
  numbers: PropTypes.object,
};

NumbersInputContainer.defaultProps = {
  numbers: { first: '1111', second: '2222', third: '1234', fourth: '1234' },
};
