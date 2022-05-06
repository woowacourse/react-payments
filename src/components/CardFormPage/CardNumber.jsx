import React, { useEffect, useRef } from 'react';
import { HYPHEN_PRIMARY_COLOR } from '../../style';
import Input from '../common/Input';
import ErrorMessage from '../common/ErrorMessage';
import { InputContainer, InputWrapper, Label, Span } from '../common/styled';
import useInputHandler from '../../hooks/useInputHandler';
import { validateCardNumbers } from '../../validator';

function CardNumber({ cardNumbers, isCorrectCardNumber }) {
  const { errorMessage, setErrorMessage, updateInputState } = useInputHandler(validateCardNumbers, {
    type: 'UPDATE_NUMBERS',
    key: 'cardNumbers',
    prevData: cardNumbers,
  });

  const cardNoARef = useRef(null);
  const cardNoBRef = useRef(null);
  const cardNoCRef = useRef(null);
  const cardNoDRef = useRef(null);
  const cardNoRefs = [cardNoARef, cardNoBRef, cardNoCRef, cardNoDRef];

  const handleInputChange = ({ target }) => {
    cardNoRefs.every((cardNoRef, index) => {
      if (target === cardNoRef.current && cardNoRef.current.value.length === 4) {
        if (index === cardNoRefs.length - 1) return false;
        cardNoRefs[index + 1].current.focus();
        return false;
      }
      return true;
    });

    updateInputState(target);
  };

  useEffect(() => {
    if (isCorrectCardNumber) {
      setErrorMessage('');
    }
  }, [setErrorMessage, isCorrectCardNumber]);

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
            data-testid="cardNoA"
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
            data-testid="cardNoB"
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
            data-testid="cardNoC"
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
            data-testid="cardNoD"
          />
        </Span>
      </InputWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default CardNumber;
