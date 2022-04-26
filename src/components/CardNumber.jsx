import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const hyphenPrimaryColor = '#8a8a8a';

const InputContainer = styled.div`
  width: 100%;
  margin: 16px 0;
  background-color: black;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;s
  margin-top: 0.375rem;
  color: ${coke => coke.color};
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

const Input = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: 1px solid #000;
  border-radius: 0.25rem;
`;

const Span = styled.span`
  padding: 8px;
`;

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
