import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  const cardNoRefs = useMemo(
    () => [cardNoARef, cardNoBRef, cardNoCRef, cardNoDRef],
    [cardNoARef, cardNoBRef, cardNoCRef, cardNoDRef],
  );

  const [value, onChangeInputValue, isValid, errorMessage] = useInput({
    type: 'number',
    maxLength: MAX_CARD_NUMBER_UNIT,
    initialValue: { cardNoA: '', cardNoB: '', cardNoC: '', cardNoD: '' },
    tryFocus: true,
    inputs: cardNoRefs,
  });

  const [errorMessageFocus, setErrorMessageFocus] = useState('');

  const isFinishTypingCardNumber = Object.values(value).join('').length === 16;

  const handleInputFocus = e => {
    if (!isFinishTypingCardNumber) setErrorMessageFocus('모든 숫자를 입력해주세요.');
  };

  useEffect(() => {
    if (!isValid) return;
    if (isFinishTypingCardNumber) setErrorMessageFocus('');

    dispatch({ type: 'CARD_NUMBER', cardNumber: convertToCardNumberString(value), isFinishTypingCardNumber });
  }, [value, isValid, dispatch, isFinishTypingCardNumber]);

  return (
    <S.InputContainer>
      <S.Label>카드 번호</S.Label>
      <S.InputWrapperForm color={HYPHEN_PRIMARY_COLOR} onFocus={handleInputFocus}>
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
      </S.InputWrapperForm>
      <ErrorMessage>{errorMessage || errorMessageFocus}</ErrorMessage>
    </S.InputContainer>
  );
}

export default React.memo(CardNumber);
