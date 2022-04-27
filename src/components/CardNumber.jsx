import React, { useState, useEffect } from 'react';
import { hyphenPrimaryColor } from '../style';
import { Input, InputContainer, InputWrapper, Label, Span } from './common';

const MAX_CARD_NUMBER_UNIT = 4;

const validator = value => {
  if (value.includes(' ') || Number.isNaN(Number(value))) {
    throw new Error('숫자만 입력해주세요.');
  }

  if (value.includes('.')) {
    throw new Error('소수점은 입력하실 수 없습니다.');
  }

  if (value.length > MAX_CARD_NUMBER_UNIT) {
    throw new Error('한 칸당 최대 4개의 숫자를 입력해야 합니다.');
  }
};

function CardNumber() {
  const [cardNumbers, setCardNumbers] = useState({
    cardNoA: '',
    cardNoB: '',
    cardNoC: '',
    cardNoD: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;

    try {
      validator(value);
    } catch (err) {
      console.log(err.message);
      return;
    }

    setCardNumbers(prevCardNumbers => ({
      ...prevCardNumbers,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isCorrectCardNumber = Object.values(cardNumbers).join('').length === 16;

    if (!isCorrectCardNumber) {
      console.log('모든 숫자를 입력해주세요.');
      return;
    }
    console.log('실행');
  }, [cardNumbers]);

  return (
    <InputContainer>
      <Label>카드 번호</Label>
      <InputWrapper color={hyphenPrimaryColor}>
        <Span>
          <Input type="text" onChange={handleInputChange} maxLength={4} name="cardNoA" value={cardNumbers.cardNoA} />
        </Span>
        <Span>-</Span>
        <Span>
          <Input type="text" onChange={handleInputChange} maxLength={4} name="cardNoB" value={cardNumbers.cardNoB} />
        </Span>
        <Span>-</Span>
        <Span>
          <Input
            type="password"
            onChange={handleInputChange}
            maxLength={4}
            name="cardNoC"
            value={cardNumbers.cardNoC}
          />
        </Span>
        <Span>-</Span>
        <Span>
          <Input
            type="password"
            onChange={handleInputChange}
            maxLength={4}
            name="cardNoD"
            value={cardNumbers.cardNoD}
          />
        </Span>
      </InputWrapper>
    </InputContainer>
  );
}

export default CardNumber;
