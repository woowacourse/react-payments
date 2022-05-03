import React, { useState, useEffect, useRef } from 'react';
import { HYPHEN_PRIMARY_COLOR } from '../style';
import ErrorMessage from './common/ErrorMessage';
import Input from './common/Input';
import { InputContainer, InputWrapper, Label, Span } from './common/styled';

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

function CardNumber({ cardNumbers, setCardNumbers, isCorrectCardNumber }) {
  const cardNoARef = useRef(null);
  const cardNoBRef = useRef(null);
  const cardNoCRef = useRef(null);
  const cardNoDRef = useRef(null);
  const cardNoRefs = [cardNoARef, cardNoBRef, cardNoCRef, cardNoDRef];

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    cardNoRefs.every((cardNoRef, index) => {
      if (e.target === cardNoRef.current && cardNoRef.current.value.length === 4) {
        if (index === cardNoRefs.length - 1) return false;
        cardNoRefs[index + 1].current.focus();
        return false;
      }
      return true;
    });

    try {
      validator(value);
    } catch (err) {
      setErrorMessage(err.message);
      return;
    }

    setErrorMessage('');
    setCardNumbers(prevCardNumbers => ({
      ...prevCardNumbers,
      [name]: value,
    }));

    if (!isCorrectCardNumber) {
      setErrorMessage('모든 숫자를 입력해주세요.');
    }
  };

  useEffect(() => {
    if (isCorrectCardNumber) {
      setErrorMessage('');
    }
  }, [isCorrectCardNumber]);

  return (
    <InputContainer>
      <Label>카드 번호</Label>
      <InputWrapper color={HYPHEN_PRIMARY_COLOR}>
        <Span>
          <Input
            ref={cardNoARef}
            type="text"
            onChange={handleInputChange}
            maxLength={4}
            name="cardNoA"
            value={cardNumbers.cardNoA}
            placeholder="1234"
            required
          />
        </Span>
        <Span>-</Span>
        <Span>
          <Input
            ref={cardNoBRef}
            type="text"
            onChange={handleInputChange}
            maxLength={4}
            name="cardNoB"
            value={cardNumbers.cardNoB}
            placeholder="1234"
            required
          />
        </Span>
        <Span>-</Span>
        <Span>
          <Input
            ref={cardNoCRef}
            type="password"
            onChange={handleInputChange}
            maxLength={4}
            name="cardNoC"
            value={cardNumbers.cardNoC}
            placeholder="****"
            required
          />
        </Span>
        <Span>-</Span>
        <Span>
          <Input
            ref={cardNoDRef}
            type="password"
            onChange={handleInputChange}
            maxLength={4}
            name="cardNoD"
            value={cardNumbers.cardNoD}
            placeholder="****"
            required
          />
        </Span>
      </InputWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default CardNumber;
