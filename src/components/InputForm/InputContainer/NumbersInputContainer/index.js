import React, { useContext } from 'react';
import * as Styled from './style.js';
import { CardFormContext } from '../../../../contexts/CardFormContextProvider.js';
import { isNumberType } from '../../../../utils/validators.js';

export const NumbersInputContainer = ({ isValid }) => {
  const { numbers, setNumbers, setNumbersValidity } = useContext(CardFormContext);

  const handleNumbersChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setNumbers((numbers) => ({ ...numbers, [inputType]: filteredValue }));
  };

  const handleNumbersBlur = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    setNumbersValidity((numbersValidity) => ({ ...numbersValidity, [inputType]: true }));

    if (inputValue.length !== 4) {
      setNumbersValidity((numbersValidity) => ({ ...numbersValidity, [inputType]: false }));
      return;
    }

    const invalidNumber = Object.keys(numbers).find((key) => !numbers[key]);

    if (invalidNumber) {
      setNumbersValidity((numbersValidity) => ({ ...numbersValidity, [invalidNumber]: false }));
    }
  };

  return (
    <Styled.Container onBlur={handleNumbersBlur} isValid={isValid}>
      <Styled.Input
        name={'first'}
        type={'text'}
        maxLength={4}
        value={numbers.first}
        onChange={handleNumbersChange}
      />
      <span>-</span>
      <Styled.Input
        name={'second'}
        type={'text'}
        maxLength={4}
        value={numbers.second}
        onChange={handleNumbersChange}
      />
      <span>-</span>
      <Styled.BlindInput
        name={'third'}
        type={'password'}
        maxLength={4}
        value={numbers.third}
        onChange={handleNumbersChange}
      />
      <span>-</span>
      <Styled.BlindInput
        name={'fourth'}
        type={'password'}
        maxLength={4}
        value={numbers.fourth}
        onChange={handleNumbersChange}
      />
    </Styled.Container>
  );
};
