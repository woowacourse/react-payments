import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const NumbersInputContainer = ({ numbers, handleChange }) => {
  const [firstNumbers, secondNumbers, thirdNumbers, fourthNumbers] = numbers;
  return (
    <Styled.Container>
      <Styled.Input value={firstNumbers} onChange={handleChange} />
      <span>-</span>
      <Styled.Input value={secondNumbers} onChange={handleChange} />
      <span>-</span>
      <Styled.BlindInput value={thirdNumbers} onChange={handleChange} />
      <span>-</span>
      <Styled.BlindInput value={fourthNumbers} onChange={handleChange} />
    </Styled.Container>
  );
};

NumbersInputContainer.propTypes = {
  numbers: PropTypes.array,
};

NumbersInputContainer.defaultProps = {
  numbers: ['1111', '2222', '1234', '1234'],
};
