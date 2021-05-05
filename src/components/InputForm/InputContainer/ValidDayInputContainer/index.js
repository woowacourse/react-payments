import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const ValidDayInputContainer = ({ validDay, isValid, handleChange, handleBlur }) => {
  const { month, year } = validDay;
  return (
    <Styled.Container onBlur={handleBlur} isValid={isValid}>
      <Styled.Input name={'month'} value={month} type={'text'} maxLength={2} onChange={handleChange} placeholder={'MM'} />
      <span>/</span>
      <Styled.Input name={'year'} value={year} type={'text'} maxLength={2} onChange={handleChange} placeholder={'YY'} />
    </Styled.Container>
  );
};

ValidDayInputContainer.propTypes = {
  validDay: PropTypes.object,
  isValid: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
};

ValidDayInputContainer.defaultProps = {
  validDay: { month: '04', year: '21' },
};
