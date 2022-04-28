import React, { useEffect, useRef } from 'react';

import { MAX_LENGTH } from '../../constants/card';
import { CARD_INFO_TYPES } from '../../reducer/types';

import {
  InputContainer,
  InputTitle,
  InputBasic,
  InputBox,
} from '../common/styled';

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
  const handleNumberChange = (e, name, index) => {
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

    moveFocus(e, index);
  };

  const moveFocus = (e, index) => {
    if (e.key === 'Backspace') {
      return;
    }
    if (e.target.value.length === MAX_LENGTH.EACH_CARD_NUMBER) {
      refs[index + 1]?.current.focus();
    }
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

  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox color="#04c09e" padding="0 50px">
        {DEFAULT_CARD_NUMBERS_TYPE.map(({ name, type }, index) => (
          <InputBasic
            key={name}
            ref={refs[index]}
            value={cardNumbers?.[name]}
            // onKeyDown={(e) => handleMoveFocus(e, index)}
            onChange={(e) => handleNumberChange(e, name, index)}
            type={type}
          />
        )).reduce((prev, cur) => [prev, '-', cur])}
      </InputBox>
    </InputContainer>
  );
};
