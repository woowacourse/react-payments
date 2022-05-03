import React, { useState, useEffect, useRef } from 'react';
import { HYPHEN_PRIMARY_COLOR } from '../theme';
import ErrorMessage from './common/ErrorMessage';
import * as S from './common/styles';

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

const convertToCardNumberString = numbers => {
  const [cardNoA, cardNoB, cardNoC, cardNoD] = Object.values(numbers);
  return `${cardNoA} ${cardNoB} ${'*'.repeat(cardNoC.length)} ${'*'.repeat(cardNoD.length)}`;
};

function CardNumber({ dispatch }) {
  const cardNoARef = useRef(null);
  const cardNoBRef = useRef(null);
  const cardNoCRef = useRef(null);
  const cardNoDRef = useRef(null);
  const cardNoRefs = [cardNoARef, cardNoBRef, cardNoCRef, cardNoDRef];

  const [cardNumbers, setCardNumbers] = useState({
    cardNoA: '',
    cardNoB: '',
    cardNoC: '',
    cardNoD: '',
  });

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
  };

  const isFinishTypingCardNumber = Object.values(cardNumbers).join('').length === 16;

  const handleInputFocus = target => {
    if (!isFinishTypingCardNumber) {
      setErrorMessage('모든 숫자를 입력해주세요.');
    }
  };

  useEffect(() => {
    dispatch({ type: 'CARD_NUMBER', cardNumber: convertToCardNumberString(cardNumbers), isFinishTypingCardNumber });
  }, [cardNumbers, dispatch, isFinishTypingCardNumber]);

  return (
    <S.InputContainer>
      <S.Label>카드 번호</S.Label>
      <S.InputWrapper color={HYPHEN_PRIMARY_COLOR} onFocus={handleInputFocus}>
        <S.Span>
          <S.Input
            ref={cardNoARef}
            type={'text'}
            onChange={handleInputChange}
            maxLength={4}
            name={'cardNoA'}
            value={cardNumbers.cardNoA}
            placeholder={'1234'}
          />
        </S.Span>
        <S.Span>-</S.Span>
        <S.Span>
          <S.Input
            ref={cardNoBRef}
            type={'text'}
            onChange={handleInputChange}
            maxLength={4}
            name={'cardNoB'}
            value={cardNumbers.cardNoB}
            placeholder={'1234'}
          />
        </S.Span>
        <S.Span>-</S.Span>
        <S.Span>
          <S.Input
            ref={cardNoCRef}
            type={'password'}
            onChange={handleInputChange}
            maxLength={4}
            name={'cardNoC'}
            value={cardNumbers.cardNoC}
            placeholder={'****'}
          />
        </S.Span>
        <S.Span>-</S.Span>
        <S.Span>
          <S.Input
            ref={cardNoDRef}
            type={'password'}
            onChange={handleInputChange}
            maxLength={4}
            name={'cardNoD'}
            value={cardNumbers.cardNoD}
            placeholder={'****'}
          />
        </S.Span>
      </S.InputWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </S.InputContainer>
  );
}

export default CardNumber;
