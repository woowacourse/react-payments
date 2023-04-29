import styled from 'styled-components';
import React, { Fragment, useRef, useState } from 'react';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { CardNumber } from '../../types';
import { hasValidLength, isNumeric } from '../../utils/validator';
import {
  CARD_NUMBER_DIGITS,
  CARD_NUMBER_INPUTS_LENGTH,
  CARD_NUMBER_INPUT_SIZE,
  PASSWORD_START_INDEX,
  ERROR,
} from '../../constants';
import { isEmptyInput, isFirst, isFullInput, isLast } from '../../utils';

interface Props {
  cardNumberInputRef: React.RefObject<HTMLInputElement>;
  cardNumber: CardNumber;
  setCardNumber: React.Dispatch<React.SetStateAction<CardNumber>>;
  moveFocusToExpirationDate: () => void;
}

export function CardNumberInput({
  cardNumberInputRef,
  cardNumber,
  setCardNumber,
  moveFocusToExpirationDate,
}: Props) {
  const [isFullInputs, setIsFullInputs] = useState([false, false, false]);
  const allRef = [
    cardNumberInputRef,
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const isPasswordInput = (index: number) => index >= PASSWORD_START_INDEX;

  const handleBackspacePress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && isEmptyInput(cardNumber[index]) && !isFirst(index)) {
      e.preventDefault();
      setIsFullInputs((prev) => [...prev.slice(1), false]);
      allRef.at(index - 1)?.current?.focus();
    }
  };

  const handleCardNumberInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber((prev) => {
      const currentCardNumber = [...prev];
      currentCardNumber[index] = e.target.value;
      return currentCardNumber;
    });

    if (isFullInput(e.target.value, CARD_NUMBER_INPUT_SIZE)) {
      setIsFullInputs((prev) => [true, ...prev.slice(0, -1)]);

      if (!isLast(index, CARD_NUMBER_INPUT_SIZE)) allRef.at(index + 1)?.current?.focus();
      if (isLast(index, CARD_NUMBER_INPUT_SIZE)) moveFocusToExpirationDate();
    }
  };

  const handleLastInputBlur = (index: number, e: React.FocusEvent<HTMLInputElement>) => {
    if (!isLast(index, CARD_NUMBER_INPUT_SIZE)) return;

    const inputs = [...cardNumber.slice(0, -1), e.target.value].join('');
    const isValidCardNumber = isNumeric(inputs) && hasValidLength(inputs, CARD_NUMBER_DIGITS);

    if (!isValidCardNumber) {
      setCardNumber(['', '', '', '']);
      alert(ERROR.INVALID_CARD_NUMBER);

      allRef[0].current?.focus();
    }
  };

  return (
    <>
      <Style.Label htmlFor='cardNumber0'>
        <Style.Title>카드 번호</Style.Title>
      </Style.Label>
      <InputContainer width={'318px'}>
        {Array.from({ length: cardNumber.length }).map((_, index) => {
          return (
            <Fragment key={index}>
              <Input
                id={`cardNumber${index}`}
                value={cardNumber[index]}
                width={'36px'}
                minLength={CARD_NUMBER_INPUT_SIZE}
                maxLength={CARD_NUMBER_INPUT_SIZE}
                required
                inputMode='numeric'
                type={isPasswordInput(index) ? 'password' : 'text'}
                ref={allRef[index]}
                onChange={(e) => handleCardNumberInputChange(index, e)}
                onKeyDown={(e) => handleBackspacePress(index, e)}
                onBlur={(e) => handleLastInputBlur(index, e)}
                placeholder={isPasswordInput(index) ? '••••' : '0000'}
              />
              {!isLast(index, CARD_NUMBER_INPUTS_LENGTH) && (
                <Style.Hyphen visible={isFullInputs[index]}>-</Style.Hyphen>
              )}
            </Fragment>
          );
        })}
      </InputContainer>
    </>
  );
}

const Style = {
  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Hyphen: styled.span<{ visible: boolean }>`
    padding: 0 10px;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  `,
};
