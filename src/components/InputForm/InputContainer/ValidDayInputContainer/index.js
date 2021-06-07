import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { CardFormContext } from '../../../../contexts/CardFormContextProvider.js';
import { isMonthType, isNumberType, isValidYearType } from '../../../../utils/validators.js';

export const ValidDayInputContainer = ({ isValid }) => {
  const { validDay, setValidDay, setValidDayValidity } = useContext(CardFormContext);

  const handleValidDayChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setValidDay((validDay) => ({ ...validDay, [inputType]: filteredValue }));
  };

  const handleValidDayBlur = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    setValidDayValidity((validDayValidity) => ({ ...validDayValidity, [inputType]: true }));

    if ((inputType === 'month' && !isMonthType(inputValue)) || !validDay['month']) {
      setValidDayValidity((validDayValidity) => ({ ...validDayValidity, month: false }));
      return;
    }

    if ((inputType === 'year' && !isValidYearType(inputValue)) || !validDay['year']) {
      setValidDayValidity((validDayValidity) => ({ ...validDayValidity, year: false }));
    }
  };

  return (
    <Styled.Container onBlur={handleValidDayBlur} isValid={isValid}>
      <Styled.Input
        name={'month'}
        value={validDay.month}
        type={'text'}
        maxLength={2}
        onChange={handleValidDayChange}
        placeholder={'MM'}
      />
      <span>/</span>
      <Styled.Input
        name={'year'}
        value={validDay.year}
        type={'text'}
        maxLength={2}
        onChange={handleValidDayChange}
        placeholder={'YY'}
      />
    </Styled.Container>
  );
};

ValidDayInputContainer.propTypes = {
  isValid: PropTypes.bool,
};
