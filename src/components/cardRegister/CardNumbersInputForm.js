import React, { useEffect } from 'react';
import { createRef } from 'react';
import { useRef } from 'react';

import { MAX_LENGTH } from '../../constants/card';
import { CARD_INFO_TYPES } from '../../reducer/types';

import { InputBasic } from '../common/InputBasic';
import { InputBox } from '../common/InputBox';
import { InputContainer, InputTitle } from '../common/styled';

const DEFAULT_CARD_NUMBERS_TYPE = [
  { name: 'firstNumber', type: 'text' },
  { name: 'secondNumber', type: 'text' },
  { name: 'thirdNumber', type: 'password' },
  { name: 'fourthNumber', type: 'password' },
];

export const CardNumbersInputForm = ({
  cardType,
  cardNumbers,
  handleCardNumbersInput,
  handleCardNumberCheck,
  openModal,
}) => {
  const handleNumberChange = (e, name) => {
    if (
      isNaN(e.nativeEvent.data) ||
      e.target.value.length > MAX_LENGTH.EACH_CARD_NUMBER
    ) {
      return;
    }

    handleCardNumbersInput({
      type: CARD_INFO_TYPES.SET_CARD_NUMBER,
      payload: { key: name, cardNumber: e.target.value },
    });
  };

  useEffect(() => {
    const isCardNumbersCompleted = Object.values(cardNumbers).every(
      (number) => number.length === MAX_LENGTH.EACH_CARD_NUMBER
    );

    handleCardNumberCheck(isCardNumbersCompleted);

    if (cardType.name === '' && isCardNumbersCompleted) {
      openModal();
    }
  }, [cardNumbers]);

  const refs = Array.from({ length: 4 }, () => useRef());
  // console.log(refs);

  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox color="#04c09e" padding="0 50px">
        {DEFAULT_CARD_NUMBERS_TYPE.map(({ name, type }, index) => (
          <InputBasic
            key={name}
            ref={refs[index]}
            value={cardNumbers?.[name]}
            onChange={(e) => handleNumberChange(e, name)}
            type={type}
          />
        )).reduce((prev, cur) => [prev, '-', cur])}
      </InputBox>
    </InputContainer>
  );
};
