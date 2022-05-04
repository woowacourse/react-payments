import React, { useState, useEffect, useRef, useCallback } from 'react';
import useInput from '../hooks/useInput';
import { HYPHEN_PRIMARY_COLOR } from '../theme';
import ErrorMessage from './common/ErrorMessage';
import * as S from './common/styles';

const MAX_CARD_NUMBER_UNIT = 4;

const convertToCardNumberString = numbers => {
  const [cardNoA, cardNoB, cardNoC, cardNoD] = Object.values(numbers);
  return `${cardNoA} ${cardNoB} ${'*'.repeat(cardNoC.length)} ${'*'.repeat(cardNoD.length)}`;
};

function CardNumber({ dispatch }) {
  const cardNoARef = useRef(null);
  const cardNoBRef = useRef(null);
  const cardNoCRef = useRef(null);
  const cardNoDRef = useRef(null);

  const handleFocus = useCallback(({ e, max, min = 0 }) => {
    const cardNoRefs = [cardNoARef, cardNoBRef, cardNoCRef, cardNoDRef];

    const go = index => {
      if (index !== cardNoRefs.length - 1) cardNoRefs[index + 1].current.focus();
      return false;
    };
    const back = index => {
      if (index !== min) cardNoRefs[index - 1].current.focus();
      return false;
    };

    cardNoRefs.every((cardNoRef, index) => {
      if (e.target !== cardNoRef.current) return true;

      if (e.target.value.length === max) go(index);

      if (e.target.value.length === min) back(index);

      return true;
    });
  }, []);

  const [value, onChangeInputValue, isValid, errorMessage] = useInput({
    type: 'number',
    maxLength: MAX_CARD_NUMBER_UNIT,
    initialValue: { cardNoA: '', cardNoB: '', cardNoC: '', cardNoD: '' },
    focusCallback: handleFocus,
  });

  const [errorMessageFocus, setErrorMessageFocus] = useState('');

  const isFinishTypingCardNumber = Object.values(value).join('').length === 16;

  const handleInputFocus = target => {
    if (!isFinishTypingCardNumber) {
      setErrorMessageFocus('모든 숫자를 입력해주세요.');
    }
  };

  useEffect(() => {
    if (!isValid) return;

    setErrorMessageFocus('');
    dispatch({ type: 'CARD_NUMBER', cardNumber: convertToCardNumberString(value), isFinishTypingCardNumber });
  }, [value, isValid, dispatch, isFinishTypingCardNumber]);

  return (
    <S.InputContainer>
      <S.Label>카드 번호</S.Label>
      <S.InputWrapper color={HYPHEN_PRIMARY_COLOR} onFocus={handleInputFocus}>
        <S.Span>
          <S.Input
            ref={cardNoARef}
            type={'text'}
            onChange={onChangeInputValue}
            maxLength={4}
            name={'cardNoA'}
            value={value.cardNoA}
            placeholder={'1234'}
          />
        </S.Span>
        <S.Span>-</S.Span>
        <S.Span>
          <S.Input
            ref={cardNoBRef}
            type={'text'}
            onChange={onChangeInputValue}
            maxLength={4}
            name={'cardNoB'}
            value={value.cardNoB}
            placeholder={'1234'}
          />
        </S.Span>
        <S.Span>-</S.Span>
        <S.Span>
          <S.Input
            ref={cardNoCRef}
            type={'password'}
            onChange={onChangeInputValue}
            maxLength={4}
            name={'cardNoC'}
            value={value.cardNoC}
            placeholder={'****'}
          />
        </S.Span>
        <S.Span>-</S.Span>
        <S.Span>
          <S.Input
            ref={cardNoDRef}
            type={'password'}
            onChange={onChangeInputValue}
            maxLength={4}
            name={'cardNoD'}
            value={value.cardNoD}
            placeholder={'****'}
          />
        </S.Span>
      </S.InputWrapper>
      <ErrorMessage>{errorMessage || errorMessageFocus}</ErrorMessage>
    </S.InputContainer>
  );
}

export default React.memo(CardNumber);
