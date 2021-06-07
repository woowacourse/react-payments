import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { CardFormContext } from '../../../../contexts/CardFormContextProvider.js';
import { isNumberType } from '../../../../utils/validators.js';

export const CvcInputContainer = ({ isValid, type, maxLength }) => {
  const { cvc, setCvc, setCvcValidity } = useContext(CardFormContext);

  const handleCvcChange = (e) => {
    const inputValue = e.target.value;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setCvc(filteredValue);
  };

  const handleCvcBlur = (e) => {
    const inputValue = e.target.value;

    setCvcValidity(true);

    if (inputValue.length !== 3) {
      setCvcValidity(false);
    }
  };

  return (
    <>
      <Styled.Container onBlur={handleCvcBlur} isValid={isValid}>
        <Styled.Input
          name={'cvc'}
          value={cvc}
          type={type}
          maxLength={maxLength}
          onChange={handleCvcChange}
        />
      </Styled.Container>
      <Styled.HelpSign>?</Styled.HelpSign>
    </>
  );
};

CvcInputContainer.propTypes = {
  isValid: PropTypes.bool,
  type: PropTypes.string,
  maxLength: PropTypes.number,
};
