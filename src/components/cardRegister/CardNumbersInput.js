import { useState } from 'react';
import styled from 'styled-components';

import { MAX_LENGTH } from '../../constants/card';
import { AutoFocusInputContainer } from '../common/AutoFocusInputContainer';

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

export const CardNumbersInput = ({ cardType, openModal }) => {
  const [cardNumbers, setCardNumbers] = useState({
    firstNumber: '',
    secondNumber: '',
    thirdNumber: '',
    fourthNumber: '',
  });
  const handleNumberChange = (e, name) => {
    if (
      isNaN(e.nativeEvent.data) ||
      e.target.value.length > MAX_LENGTH.EACH_CARD_NUMBER
    ) {
      return;
    }

    setCardNumbers((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleCardNumbersCompleted = () => {
    console.log('card numbers completed');

    // if (cardType.name === '' && isCardNumbersCompleted) {
    //   openModal();
    // }
  };

  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <Style.CardNumberInputBox>
        <AutoFocusInputContainer
          maxValueLength={MAX_LENGTH.EACH_CARD_NUMBER}
          onCompleted={handleCardNumbersCompleted}
        >
          {DEFAULT_CARD_NUMBERS_TYPE.map(({ name, type }) => (
            <InputBasic
              key={name}
              value={cardNumbers[name]}
              onChange={(e) => handleNumberChange(e, name)}
              type={type}
            />
          )).reduce((prev, cur) => [prev, '-', cur])}
        </AutoFocusInputContainer>
      </Style.CardNumberInputBox>
    </InputContainer>
  );
};

const Style = {
  CardNumberInputBox: styled(InputBox)`
    color: #04c09e;
    padding: 0 50px;
  `,
};
