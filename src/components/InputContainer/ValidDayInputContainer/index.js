import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const ValidDayInputContainer = ({ validDay, handleChange }) => {
  const { month, year } = validDay;
  return (
    <Styled.Container>
      <Styled.Input value={month} onChange={handleChange} />
      <span>/</span>
      <Styled.Input value={year} onChange={handleChange} />
    </Styled.Container>
  );
};

ValidDayInputContainer.propTypes = {
  validDay: PropTypes.object,
};

ValidDayInputContainer.defaultProps = {
  validDay: { month: '04', year: '21' },
};
